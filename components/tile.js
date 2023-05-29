import React, { useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import SoundPlayer from './audio-player';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.soundPlayer = new SoundPlayer({ audioPath: props.noteName });
  }

  handlePlay() {
    soundPlayer.playAudio();
  };

  handleStop () {
    soundPlayer.stopAudio();
  };
}