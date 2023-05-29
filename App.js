import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import PianoRoll from './components/piano-roll';
import Slider from './components/scroll-bar';
import { CameraTargetContextProvider } from './context/piano-track-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexGrow: 1
  }
});

export default function App(){

  return(
    <CameraTargetContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Slider/>
          <PianoRoll/>
        </View>
      </GestureHandlerRootView>
    </CameraTargetContextProvider>
  );
}