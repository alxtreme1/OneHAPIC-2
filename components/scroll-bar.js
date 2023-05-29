import React, { useContext, useEffect, useState } from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import { View } from "react-native";
import { CameraTargetContext } from '../context/piano-track-context';
import styles from '../styles/slider';

export default function SliderExample() {
    const {thumbWidth} = useContext(CameraTargetContext);
    const {sliderWidth, setSliderWidth} = useContext(CameraTargetContext);
    const {sliderValue, setSliderValue} = useContext(CameraTargetContext);
    const {maximumValue} = useContext(CameraTargetContext);

    const trackMarks = [maximumValue/4, 2*maximumValue/4, 3*maximumValue/4, 4* maximumValue/4];
    const touchThumbSize = {width: thumbWidth, height: 40};

    const CustomThumb = () => (
        <View style={[styles.thumbContainer, {width: thumbWidth}]}>
            <View style={styles.thumbGrass}/>
        </View>
    );
    
    const offsettingTrackMarks = (pos) => {
        octaveSliderWidth = (sliderWidth - thumbWidth) / 4;
        difference = thumbWidth - octaveSliderWidth;
        if(thumbWidth >= octaveSliderWidth)
            return {left: -2 + (pos + 1) * difference / 5};
        return {left: -2 + (4 - pos) * difference / 5};
    };

    const CustomTrackMark = (pos) => (
        <View style={[styles.trackMarkContainer, offsettingTrackMarks(pos)]}/>
    );


    return(
        <View 
            onLayout={ ({nativeEvent}) => {setSliderWidth(nativeEvent.layout.width)} }
            style={styles.sliderContainer}>
            <Slider 
                trackMarks={trackMarks}
                renderTrackMarkComponent={CustomTrackMark}
                style={styles.slider}
                value={sliderValue}
                onValueChange={value => setSliderValue(value)}
                trackStyle={styles.track}
                renderThumbComponent={CustomThumb}
                maximumValue={maximumValue} minimumValue={0}
                thumbTouchSize={touchThumbSize}
                maximumTrackTintColor='#A9A9A9'
                minimumTrackTintColor='#A9A9A9'
            />
        </View>
    );
}   