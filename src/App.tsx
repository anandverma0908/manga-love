import React, { useEffect } from 'react';
import './index.css';
import { useAssets } from './hooks/useAssets';
import { PhotoPanel, VideoItem } from './types';

import MusicButton from './components/MusicButton';
import SparkEffect from './components/SparkEffect';
import VolumeBanner from './components/VolumeBanner';
import HeroSection from './components/HeroSection';
import PhotoSection from './components/PhotoSection';
import PoemSection from './components/PoemSection';
import EndingSection from './components/EndingSection';

const App: React.FC = () => {
  const { manifest, loading, imageUrl, videoUrl, audioUrl } = useAssets();

  // Custom cursor
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'manga-cursor';
    cursor.innerHTML = `
      <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2L19 11L11 13.5L7.5 20L4 2Z" fill="#e8192c" stroke="#0a0806" stroke-width="2" stroke-linejoin="round"/>
      </svg>`;
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };
    document.addEventListener('mousemove', move);
    return () => {
      document.removeEventListener('mousemove', move);
      cursor.remove();
    };
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', background: '#0a0806',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '1rem',
      }}>
        <div style={{
          fontFamily: 'Bangers, cursive', fontSize: 'clamp(2rem,8vw,4rem)',
          color: '#ffe01a', textShadow: '4px 4px 0 #e8192c',
          WebkitTextStroke: '2px #0a0806', letterSpacing: '0.1em',
        }}>LOADING...</div>
        <div style={{ fontFamily: 'Comic Neue, cursive', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
          Place your photos in <code style={{ color: '#ffe01a' }}>public/assets/images/</code>
        </div>
      </div>
    );
  }

  // Build photo panels
  const photos: PhotoPanel[] = (manifest?.images ?? []).map((path, i) => ({
    src: imageUrl(path),
    caption: manifest?.captions?.[i] ?? `Photo ${i + 1}`,
    index: i,
  }));

  const videos: VideoItem[] = (manifest?.videos ?? []).map((path, i) => ({
    src: videoUrl(path),
    index: i,
  }));

  const bgAudio = manifest?.audio ? audioUrl(manifest.audio) : '';

  return (
    <>
      <SparkEffect />
      {bgAudio && <MusicButton audioUrl={bgAudio} />}

      <main>
        <HeroSection />

        <VolumeBanner text="★★★  CHAPTER 02 — &quot;MOMENT I KEEP&quot;  ★★★" />
        <PhotoSection photos={photos} videos={videos} />

        <VolumeBanner text={`★★★  CHAPTER 03 — A Letter I Wasn't Sure I'd Send  ★★★`} />
        <PoemSection />

        <VolumeBanner text='★★★  FINAL CHAPTER — "EVEN AFTER THIS PAGE"  ★★★' />
        <EndingSection />
      </main>
    </>
  );
};

export default App;
