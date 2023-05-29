import React, { useRef, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { SoundPlayersContext } from '../context/sounds-context';
import { TapGestureHandler } from 'react-native-gesture-handler';

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

  
  const soundPlayers = useContext(SoundPlayersContext);
  const noteName = props.noteName;
  const player = soundPlayers[noteName];

  const handlePlay = async () => {
    const noteName = props.noteName;
    const player = soundPlayers[noteName];
    await player.setRateAsync(1 / (5 - props.velocity + 1), false);
  
    if (player) {
      try {
        const status = await player.getStatusAsync();
  
        if (status.isLoaded) {
          await player.setPositionAsync(0);
          await player.playAsync();
        } else {
          console.log(`Sound player for note ${noteName} is not loaded.`);
        }
      } catch (error) {
        console.log(`Error playing sound for note ${noteName}:`, error);
      }
    } else {
      console.log(`Sound player for note ${noteName} is not available.`);
    }
  };

  const handleStop = async () => {    
    if (player) {
      try {
        await player.stopAsync();
      } catch (error) {
        console.log('Error stopping sound:', error);
      }
    }
  };

  return(
    <TapGestureHandler onActivated={handlePlay}>
      <View style={personalizedTile} />
    </TapGestureHandler>
  );
}