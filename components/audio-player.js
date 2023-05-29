import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

const SoundPlayer = ({ audioPath, velocity }) => {
  const [soundObject, setSoundObject] = useState(null);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        const sound = new Audio.Sound();
        await sound.loadAsync(audioFiles[audioPath]);
        setSoundObject(sound);
        setIsAudioLoaded(true);
        console.log('Audio loaded successfully!');
      } catch (error) {
        console.log('Error loading audio:', error);
      }
    };

    if (!isAudioLoaded && audioPath === 'c3') {
      loadAudio();
    }

    return () => {
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, [audioPath, isAudioLoaded]);

  const playAudio = async () => {
    try {
      if (isAudioLoaded) {
        await soundObject.setPositionAsync(0); // Reset to the beginning
        await soundObject.playAsync();
        console.log('Audio played successfully!');
      } else {
        console.log('Waiting for audio to load...');
      }
    } catch (error) {
      console.log('Error playing audio:', error);
    }
  };

  const stopAudio = async () => {
    try {
      if (soundObject) {
        await soundObject.stopAsync();
        console.log('Audio stopped.');
      }
    } catch (error) {
      console.log('Error stopping audio:', error);
    }
  };

  useEffect(() => {
    if (soundObject && velocity) {
      soundObject.setRateAsync(velocity, true);
    }
  }, [soundObject, velocity]);

  const audioFiles = {
    c1: require('../assets/audio/c1.mp3'),
    db1: require('../assets/audio/db1.mp3'),
    d1: require('../assets/audio/d1.mp3'),
    eb1: require('../assets/audio/eb1.mp3'),
    e1: require('../assets/audio/e1.mp3'),
    f1: require('../assets/audio/f1.mp3'),
    gb1: require('../assets/audio/gb1.mp3'),
    g1: require('../assets/audio/g1.mp3'),
    ab1: require('../assets/audio/ab1.mp3'),
    a1: require('../assets/audio/a1.mp3'),
    bb1: require('../assets/audio/bb1.mp3'),
    b1: require('../assets/audio/b1.mp3'),
    
    c2: require('../assets/audio/c2.mp3'),
    db2: require('../assets/audio/db2.mp3'),
    d2: require('../assets/audio/d2.mp3'),
    eb2: require('../assets/audio/eb2.mp3'),
    e2: require('../assets/audio/e2.mp3'),
    f2: require('../assets/audio/f2.mp3'),
    gb2: require('../assets/audio/gb2.mp3'),
    g2: require('../assets/audio/g2.mp3'),
    ab2: require('../assets/audio/ab2.mp3'),
    a2: require('../assets/audio/a2.mp3'),
    bb2: require('../assets/audio/bb2.mp3'),
    b2: require('../assets/audio/b2.mp3'),

    c3: require('../assets/audio/c3.mp3'),
    db3: require('../assets/audio/db3.mp3'),
    d3: require('../assets/audio/d3.mp3'),
    eb3: require('../assets/audio/eb3.mp3'),
    e3: require('../assets/audio/e3.mp3'),
    f3: require('../assets/audio/f3.mp3'),
    gb3: require('../assets/audio/gb3.mp3'),
    g3: require('../assets/audio/g3.mp3'),
    ab3: require('../assets/audio/ab3.mp3'),
    a3: require('../assets/audio/a3.mp3'),
    bb3: require('../assets/audio/bb3.mp3'),
    b3: require('../assets/audio/b3.mp3'),

    c4: require('../assets/audio/c4.mp3'),
    db4: require('../assets/audio/db4.mp3'),
    d4: require('../assets/audio/d4.mp3'),
    eb4: require('../assets/audio/eb4.mp3'),
    e4: require('../assets/audio/e4.mp3'),
    f4: require('../assets/audio/f4.mp3'),
    gb4: require('../assets/audio/gb4.mp3'),
    g4: require('../assets/audio/g4.mp3'),
    ab4: require('../assets/audio/ab4.mp3'),
    a4: require('../assets/audio/a4.mp3'),
    bb4: require('../assets/audio/bb4.mp3'),
    b4: require('../assets/audio/b4.mp3'),

    c5: require('../assets/audio/c5.mp3'),
    db5: require('../assets/audio/db5.mp3'),
    d5: require('../assets/audio/d5.mp3'),
    eb5: require('../assets/audio/eb5.mp3'),
    e5: require('../assets/audio/e5.mp3'),
    f5: require('../assets/audio/f5.mp3'),
    gb5: require('../assets/audio/gb5.mp3'),
    g5: require('../assets/audio/g5.mp3'),
    ab5: require('../assets/audio/ab5.mp3'),
    a5: require('../assets/audio/a5.mp3'),
    bb5: require('../assets/audio/bb5.mp3'),
    b5: require('../assets/audio/b5.mp3'),
  };

  return { playAudio, stopAudio };
};

export default SoundPlayer;





// import React, { useState, useEffect } from 'react';
// import { Audio } from 'expo-av';

// const SoundPlayer = ({ audioPath }) => {
//   const [soundObject, setSoundObject] = useState(null);
//   const [isAudioLoaded, setIsAudioLoaded] = useState(false);

//   const loadAudio = async () => {
//     try {
//       const sound = new Audio.Sound();
//       await sound.loadAsync(audioFiles[audioPath]);
//       setSoundObject(sound);
//       setIsAudioLoaded(true);
//       console.log('Áudio carregado com sucesso!');
//     } catch (error) {
//       console.log('Erro ao carregar o áudio:', error);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (soundObject) {
//         soundObject.unloadAsync();
//       }
//     };
//   }, [audioPath, isAudioLoaded]);

//   const playAudio = async () => {
//     try {
//       if (isAudioLoaded) {
//         await soundObject.setPositionAsync(0); // Reset to the beginning
//         await soundObject.playAsync();
//         console.log('Áudio reproduzido com sucesso!');
//       } else {
//         console.log('Aguardando carregamento do áudio...');
//       }
//     } catch (error) {
//       console.log('Erro ao reproduzir o áudio:', error);
//     }
//   };

//   const stopAudio = async () => {
//     try {
//       if (soundObject) {
//         await soundObject.stopAsync();
//         console.log('Áudio parado.');
//       }
//     } catch (error) {
//       console.log('Erro ao parar o áudio:', error);
//     }
//   };

//   const unloadAudio = async () => {
//     try {
//       if (soundObject) {
//         await soundObject.unloadAsync();
//         setSoundObject(null);
//         setIsAudioLoaded(false);
//         console.log('Áudio descarregado com sucesso!');
//       }
//     } catch (error) {
//       console.log('Erro ao descarregar o áudio:', error);
//     }
//   };

//   const audioFiles = {
//     c1: require('../assets/audio/c1.mp3'),
//     db1: require('../assets/audio/db1.mp3'),
//     d1: require('../assets/audio/d1.mp3'),
//     eb1: require('../assets/audio/eb1.mp3'),
//     e1: require('../assets/audio/e1.mp3'),
//     f1: require('../assets/audio/f1.mp3'),
//     gb1: require('../assets/audio/gb1.mp3'),
//     g1: require('../assets/audio/g1.mp3'),
//     ab1: require('../assets/audio/ab1.mp3'),
//     a1: require('../assets/audio/a1.mp3'),
//     bb1: require('../assets/audio/bb1.mp3'),
//     b1: require('../assets/audio/b1.mp3'),
    
//     c2: require('../assets/audio/c2.mp3'),
//     db2: require('../assets/audio/db2.mp3'),
//     d2: require('../assets/audio/d2.mp3'),
//     eb2: require('../assets/audio/eb2.mp3'),
//     e2: require('../assets/audio/e2.mp3'),
//     f2: require('../assets/audio/f2.mp3'),
//     gb2: require('../assets/audio/gb2.mp3'),
//     g2: require('../assets/audio/g2.mp3'),
//     ab2: require('../assets/audio/ab2.mp3'),
//     a2: require('../assets/audio/a2.mp3'),
//     bb2: require('../assets/audio/bb2.mp3'),
//     b2: require('../assets/audio/b2.mp3'),

//     c3: require('../assets/audio/c3.mp3'),
//     db3: require('../assets/audio/db3.mp3'),
//     d3: require('../assets/audio/d3.mp3'),
//     eb3: require('../assets/audio/eb3.mp3'),
//     e3: require('../assets/audio/e3.mp3'),
//     f3: require('../assets/audio/f3.mp3'),
//     gb3: require('../assets/audio/gb3.mp3'),
//     g3: require('../assets/audio/g3.mp3'),
//     ab3: require('../assets/audio/ab3.mp3'),
//     a3: require('../assets/audio/a3.mp3'),
//     bb3: require('../assets/audio/bb3.mp3'),
//     b3: require('../assets/audio/b3.mp3'),

//     c4: require('../assets/audio/c4.mp3'),
//     db4: require('../assets/audio/db4.mp3'),
//     d4: require('../assets/audio/d4.mp3'),
//     eb4: require('../assets/audio/eb4.mp3'),
//     e4: require('../assets/audio/e4.mp3'),
//     f4: require('../assets/audio/f4.mp3'),
//     gb4: require('../assets/audio/gb4.mp3'),
//     g4: require('../assets/audio/g4.mp3'),
//     ab4: require('../assets/audio/ab4.mp3'),
//     a4: require('../assets/audio/a4.mp3'),
//     bb4: require('../assets/audio/bb4.mp3'),
//     b4: require('../assets/audio/b4.mp3'),

//     c5: require('../assets/audio/c5.mp3'),
//     db5: require('../assets/audio/db5.mp3'),
//     d5: require('../assets/audio/d5.mp3'),
//     eb5: require('../assets/audio/eb5.mp3'),
//     e5: require('../assets/audio/e5.mp3'),
//     f5: require('../assets/audio/f5.mp3'),
//     gb5: require('../assets/audio/gb5.mp3'),
//     g5: require('../assets/audio/g5.mp3'),
//     ab5: require('../assets/audio/ab5.mp3'),
//     a5: require('../assets/audio/a5.mp3'),
//     bb5: require('../assets/audio/bb5.mp3'),
//     b5: require('../assets/audio/b5.mp3'),
//   };

//   return { playAudio, stopAudio, loadAudio, unloadAudio };
// };

// export default SoundPlayer;


      
      



// import React from 'react';
// import { Audio } from 'expo-av';
// import { audioFiles } from '../context/all-key-notes';

// export default function SoundPlayer({ audioPath }) {
//   const [audio, setAudio] = React.useState();

//   async function playAudio() {
//     // clearInterval(fadeOutIntervalId);
//     if(audio && audio.isPlaying) {
//       await audio.stopAsync();
//       await audio.unloadAsync();
//       setAudio(null);
//     }
//     try {
//       console.log('Loading Sound ' + audioFiles[audioPath]);
//       const { sound } = await Audio.Sound.createAsync(audioFiles[audioPath]);
//       // await sound?.stopAsync();
//       setAudio(sound);

//       console.log('Playing Sound');
//       await sound.playAsync();
//       // setAudio(null);
//       // if(!sound.isPlaying) {
//       //   await sound.unloadAsync();
//       //   setAudio(null);
//       // }
//       } catch (error) {
//       console.error('Error playing audio:', error);
//     }
//   }

//   async function stopAudio() {
//     if(audio) {
//       console.log('Stopping Sound');
//       await audio.stopAsync();
//     }
//     setAudio(null);
//   }

//   // let fadeOutIntervalId;

//   // async function stopAudio() {
//   //   try {
//   //     if (audio) {
//   //       console.log('Stopping Sound');

//   //       const fadeOutDuration = 1000; // Duration of the fade-out transition in milliseconds
//   //       const fadeOutInterval = 100; // Time interval between fade-out steps in milliseconds

//   //       const initialVolume = 1; // Get the initial volume

//   //       const volumeStep = initialVolume / (fadeOutDuration / fadeOutInterval);
//   //       let currentVolume = initialVolume;

//   //       fadeOutIntervalId = setInterval(async () => {
//   //         currentVolume -= volumeStep;
//   //         if (currentVolume <= 0) {
//   //           clearInterval(fadeOutIntervalId);
//   //           currentVolume = 0;
//   //           await audio?.stopAsync();
//   //           await audio?.unloadAsync();
//   //         }

//   //         audio?.setVolumeAsync(currentVolume);
//   //       }, fadeOutInterval);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error stopping sound:', error);
//   //   }
//   //   setAudio(null);
//   // }
  
//   React.useEffect(() => {
//     return audio
//       ? () => {
//           if(!audio.isPlaying) {
//             console.log('Unloading Sound');
//             // audio.unloadAsync();
//             // setAudio(null);
//           }
//         }
//       : undefined;
//   }, [audio]);

//   return { playAudio, stopAudio };
// }