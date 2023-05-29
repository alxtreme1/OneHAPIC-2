import { StyleSheet } from "react-native";
import { useContext } from "react";
import { CameraTargetContext } from "../context/piano-track-context";

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 0.2,
        justifyContent: 'center'
    },
    slider: {
        height: '100%',
    },
    track: {
        borderRadius: 2,
        height: '100%',
    },
    thumbContainer: {
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        width: 50,
        borderRadius: 3.7,
        borderColor: '#023020',
        borderWidth: 2.2,
    },
    trackMarkContainer: {
        backgroundColor: '#FFBF00',
        borderWidth: 2.3,
        borderColor: '#FFBF00',
        height: 40,
        left: -2
    },
    thumbGrass: {
        opacity: 0.73,
        backgroundColor: '#228B22',
        width: '100%',
        height: '100%'
    }
})

export default styles;