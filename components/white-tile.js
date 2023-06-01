import React, { useRef, useEffect, useContext, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SoundPlayersContext } from '../context/sounds-context';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  whitePianoTile: {
    backgroundColor: '#fff',
    borderWidth: 0.4,
    height: '100%',
    width: 84,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    zIndex: 1,
  },
});

export default function(props) {
  const { soundPlayers, defaultOctavaKeysNum } = useContext(SoundPlayersContext);
  const noteName = props.noteName;
  const player = soundPlayers[noteName];
  const [isPlaying, setPlaying] = useState(false);

  const setRateAndPlay = async () => {
    await player.setRateAsync(1 / Math.pow(2, defaultOctavaKeysNum - props.velocity), false);
    await handlePlay();
  };

  const handlePlay = async () => {
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
    } else if (state === State.END || state === State.FAILED || state === State.UNDETERMINED) {
      
      if (isPlaying) {
        handleStop();
      }
    }
  };

  return (
    <LongPressGestureHandler
      onHandlerStateChange={handleLongPress}
      minDurationMs={0} >
      <View style={styles.whitePianoTile} />
    </LongPressGestureHandler>
  );
}
