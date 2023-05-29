import React, { useRef, useEffect, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SoundPlayersContext } from '../context/sounds-context';
import { TapGestureHandler } from 'react-native-gesture-handler';

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
  const soundPlayers = useContext(SoundPlayersContext);
  const noteName = props.noteName;
  const player = soundPlayers[noteName];

  const handlePlay = async () => {
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

  return (
    <TapGestureHandler onActivated={handlePlay}>
      <View style={styles.whitePianoTile} />
    </TapGestureHandler>
  );
}