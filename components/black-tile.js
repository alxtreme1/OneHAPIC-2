import React, { useRef, useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { SoundPlayersContext } from '../context/sounds-context';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

const BLACK_TILE_WIDTH = 54.2;

const styles = StyleSheet.create({
  blackPianoTile: {
    backgroundColor: '#000',
    height: '61.54%',
    width: BLACK_TILE_WIDTH,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    zIndex: 2
  }
});

export default function(props) {
  let marginOffset = BLACK_TILE_WIDTH * (props.marginOffset / 100);

  const personalizedMarge = StyleSheet.create({
    blackPianoTile: {
      marginLeft: - (BLACK_TILE_WIDTH/2) + marginOffset,
      marginRight: - (BLACK_TILE_WIDTH/2) - marginOffset
    }
  });

  const personalizedTile = StyleSheet.compose(styles.blackPianoTile, personalizedMarge.blackPianoTile);

  
  const { soundPlayers, defaultOctavaKeysNum } = useContext(SoundPlayersContext);
  const noteName = props.noteName;
  const player = soundPlayers[noteName];

  const [isPlaying, setPlaying] = useState(false);
  
  const setRateAndPlay = async () => {
    await player.setRateAsync(1 / Math.pow(2, defaultOctavaKeysNum - props.velocity), false);
    await handlePlay();
  };

  const handlePlay = async () => {
    clearInterval(fadeOutIntervalId);
    await player.setRateAsync(Math.pow(2, props.velocity - defaultOctavaKeysNum), false);

    try {
      const status = await player.getStatusAsync();

      if (status.isLoaded) {
        await player.setPositionAsync(0);
        await player.playAsync();
        setPlaying(true);
      } else {
        console.log(`Sound player for note ${noteName} is not loaded.`);
      }
    } catch (error) {
      console.log(`Error playing sound for note ${noteName}:`, error);
    }
  };

  const handleStop = async () => {
    if (player) {
      try {
        await player.stopAsync();
        setPlaying(false);
      } catch (error) {
        console.log('Error stopping sound:', error);
      }
    }
  };

  const handleLongPress = event => {
    const { state, numberOfPointers } = event.nativeEvent;

    if (state === State.BEGAN) {

      if (numberOfPointers > 0) {
        handlePlay();
      }
    } else if (state === State.END || state === State.CANCELLED || state === State.FAILED || state === State.UNDETERMINED) {

      if (isPlaying) {
        handleStop();
      }
    }
  };
  
  let fadeOutIntervalId;

  async function fadeOut() {
    try {
      if (player) {
        console.log('Stopping Sound');

        const fadeOutDuration = 800; // Duration of the fade-out transition in milliseconds
        const fadeOutInterval = 100; // Time interval between fade-out steps in milliseconds

        const initialVolume = 1; // Get the initial volume

        const volumeStep = initialVolume / (fadeOutDuration / fadeOutInterval);
        let currentVolume = initialVolume;

        fadeOutIntervalId = setInterval(async () => {
          currentVolume -= volumeStep;
          if (currentVolume <= 0) {
            clearInterval(fadeOutIntervalId);
            currentVolume = 0;
            handleStop();
            player?.setVolumeAsync(initialVolume);
          }

          player?.setVolumeAsync(currentVolume);
        }, fadeOutInterval);
      }
    } catch (error) {
      console.error('Error stopping sound:', error);
    }
  }

  return(
    <LongPressGestureHandler 
      onHandlerStateChange={handleLongPress}
      minDurationMs={0} >
      <View style={personalizedTile} />
    </LongPressGestureHandler>
  );
}