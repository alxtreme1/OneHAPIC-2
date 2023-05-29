import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import WhiteTile from './white-tile';
import BlackTile from './black-tile';

const styles = StyleSheet.create({
    padTrack: {
        flexDirection: "row",
        height: '100%'
    }
});

export default function(props) {
    const notes = ['c', 'db', 'd', 
                    'eb', 'e', 'f', 
                    'gb', 'g', 'ab', 
                    'a', 'bb', 'b'];
                    
    // let audios = notes.map(element => audioFiles[element]())

    return(
        <View style={styles.padTrack}>
            <WhiteTile noteName={notes[0]} velocity={props.pad} />
            <BlackTile noteName={notes[1]} velocity={props.pad}  marginOffset = {-15} />
            <WhiteTile noteName={notes[2]} velocity={props.pad} />
            <BlackTile noteName={notes[3]} velocity={props.pad}  marginOffset = {15} />
            <WhiteTile noteName={notes[4]} velocity={props.pad} />
            <WhiteTile noteName={notes[5]} velocity={props.pad} />
            <BlackTile noteName={notes[6]} velocity={props.pad}  marginOffset = {-30} />
            <WhiteTile noteName={notes[7]} velocity={props.pad} />
            <BlackTile noteName={notes[8]} velocity={props.pad}  marginOffset = {0} />
            <WhiteTile noteName={notes[9]} velocity={props.pad} />
            <BlackTile noteName={notes[10]} velocity={props.pad}  marginOffset = {30} />
            <WhiteTile noteName={notes[11]} velocity={props.pad} />
        </View>
    );
}