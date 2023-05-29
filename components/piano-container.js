import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import PianoRoll from './piano-roll';
import Slider from './scroll-bar';
import { CameraTargetContext } from "../context/piano-track-context";

const styles = StyleSheet.create({
    container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexGrow: 1
    }
});

export default function PianoContainer() {
    const { scrollPianoRef } = useContext(CameraTargetContext);
    const { pianoWidth } = useContext(CameraTargetContext);
    return(
        <View style={styles.container}>
            <Slider/>
            <PianoRoll onLayout={
                (event) => {
                    const { width } = event.nativeEvent.layout;
                    scrollPianoRef.scrollTo({x: width / 2})
                }} />
        </View>
    );
}