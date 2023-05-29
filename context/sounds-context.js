import React, { createContext, useEffect, useState } from 'react';
import { Audio } from 'expo-av';

const SoundPlayersContext = createContext();

const SoundPlayersProvider = ({ children }) => {
  const [soundPlayers, setSoundPlayers] = useState({});

  useEffect(() => {
    const loadSoundPlayers = async () => {
      const soundPlayerPromises = {
        c: Audio.Sound.createAsync(require('../assets/audio/c5.mp3')),
        db: Audio.Sound.createAsync(require('../assets/audio/db5.mp3')),
        d: Audio.Sound.createAsync(require('../assets/audio/d5.mp3')),
        eb: Audio.Sound.createAsync(require('../assets/audio/eb5.mp3')),
        e: Audio.Sound.createAsync(require('../assets/audio/e5.mp3')),
        f: Audio.Sound.createAsync(require('../assets/audio/f5.mp3')),
        gb: Audio.Sound.createAsync(require('../assets/audio/gb5.mp3')),
        g: Audio.Sound.createAsync(require('../assets/audio/g5.mp3')),
        ab: Audio.Sound.createAsync(require('../assets/audio/ab5.mp3')),
        a: Audio.Sound.createAsync(require('../assets/audio/a5.mp3')),
        bb: Audio.Sound.createAsync(require('../assets/audio/bb5.mp3')),
        b: Audio.Sound.createAsync(require('../assets/audio/b5.mp3')),
      };

      const loadedSoundPlayers = {};

      for (const [noteName, soundPlayerPromise] of Object.entries(soundPlayerPromises)) {
        try {
          const { sound } = await soundPlayerPromise;
          loadedSoundPlayers[noteName] = sound;
        } catch (error) {
          console.log(`Error loading sound player for note ${noteName}:`, error);
        }
      }

      setSoundPlayers(loadedSoundPlayers);
    };

    loadSoundPlayers();
  }, []);

  return (
    <SoundPlayersContext.Provider value={soundPlayers}>
      {children}
    </SoundPlayersContext.Provider>
  );
};

export { SoundPlayersContext, SoundPlayersProvider };


// export const audioFiles = {
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