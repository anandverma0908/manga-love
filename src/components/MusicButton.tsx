import React, { useRef, useState } from 'react';
import styles from './MusicButton.module.css';

interface Props { audioUrl: string; }

const MusicButton: React.FC<Props> = ({ audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play().catch(() => {}); setPlaying(true); }
  };

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop />
      <button
        className={`${styles.btn} ${playing ? styles.on : ''}`}
        onClick={toggle}
        title={playing ? 'Pause music' : 'Play music'}
        aria-label="Toggle background music"
      >
        {playing ? '♬' : '♪'}
      </button>
    </>
  );
};

export default MusicButton;
