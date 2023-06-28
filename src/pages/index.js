import React, { useState, useRef, useEffect } from 'react';
import { songsdata } from '@/datalist/audio';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(songsdata[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {

      audioRef.current.pause()
    }

  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className='bg-red-200'>

      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={toggleShuffle}>{isShuffle ? 'Disable Shuffle' : 'Enable Shuffle'}</button>
      <button onClick={toggleRepeat}>{isRepeat ? 'Disable Repeat' : 'Enable Repeat'}</button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default MusicPlayer;
