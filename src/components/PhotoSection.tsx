import React from 'react';
import styles from './PhotoSection.module.css';
import { PhotoPanel, VideoItem } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Props {
  photos: PhotoPanel[];
  videos: VideoItem[];
}

interface PanelProps {
  photo?: PhotoPanel;
  video?: VideoItem;
  className?: string;
  num: number;
}

const Panel: React.FC<PanelProps> = ({ photo, video, className = '', num }) => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className={`${styles.panel} ${className} sr`}>
      <div className={styles.pov} />
      <span className={styles.pnum}>{num}</span>

      {video ? (
        <video
          src={video.src}
          className={styles.media}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : photo ? (
        <img src={photo.src} alt={photo.caption} className={styles.media} />
      ) : (
        <div className={styles.empty}>
          <div className="ht" />
          <span className={styles.emptyIco}>{['📸','🌸','⭐','🌟','🦋','🌙','☕','🌺','💫'][num-1] || '📸'}</span>
          <span className={styles.emptyLbl}>
            {num === 1 ? 'Add image/video to assets/images or assets/videos' : `photo${num}.jpg`}
          </span>
        </div>
      )}

      <div className={styles.pcap}>{photo?.caption || `Panel ${num}`}</div>
    </div>
  );
};

const PhotoSection: React.FC<Props> = ({ photos, videos }) => {
  const hdrRef = useScrollReveal();

  // Map photos to panels (fill slots 1-9), videos can overlay slot or appear separately
  const getPhoto = (i: number) => photos[i] || undefined;
  const getVideo = (i: number) => videos[i] || undefined;

  return (
    <section className={styles.section} id="photos">
      <div className="ht" />

      <div ref={hdrRef} className={`${styles.header} sr`}>
        <div className={styles.secNum}>02</div>
        <div>
          <div className={styles.secTtl}>
            MEMORIES I KEEP ALIVE<br />
            {/* <span>★ place photos in public/assets/images ★</span> */}
          </div>
        </div>
        <div className={styles.hdrBubble}>
          <div className={styles.hdrBubbleInner}>
            <p>IT<br />HURTS!!</p>
          </div>
        </div>
      </div>

      <div className={styles.panelWrap}>
        {/* SFX */}
        <div className={styles.sfx} style={{ top: '0.8rem', right: '2.8rem', fontSize: 'clamp(1.5rem,3.5vw,2.8rem)', color: 'var(--red)', '--r': '-8deg' } as React.CSSProperties}>ACHE!</div>
        <div className={styles.sfx} style={{ top: '13rem', left: '63%', fontSize: 'clamp(1.2rem,2.5vw,1.9rem)', color: 'var(--blue)', '--r': '5deg', animationDelay: '.5s' } as React.CSSProperties}>THUMP~</div>
        <div className={styles.sfx} style={{ bottom: '1.5rem', left: '2.5rem', fontSize: 'clamp(1.2rem,3vw,2.3rem)', color: 'var(--yellow2)', WebkitTextStroke: '2px var(--ink)', '--r': '-5deg', animationDelay: '1s' } as React.CSSProperties}>STILL YOU!</div>

        {/* Row 1 — big asymmetric grid */}
        <div className={styles.row1}>
          <Panel num={1} photo={getPhoto(0)} video={getVideo(0)} className={styles.p1} />
          <Panel num={2} photo={getPhoto(1)} className={styles.p2} />
          <Panel num={3} photo={getPhoto(2)} className={styles.p3} />
          <Panel num={4} photo={getPhoto(3)} className={styles.p4} />
          <Panel num={5} photo={getPhoto(4)} className={styles.p5} />
        </div>

        {/* Row 2 */}
        <div className={styles.row2}>
          <Panel num={6} photo={getPhoto(5)} className={styles.pb1} />
          <Panel num={7} photo={getPhoto(6)} className={styles.pb2} />
          <Panel num={8} photo={getPhoto(7)} className={styles.pb3} />
          <Panel num={9} photo={getPhoto(8)} video={getVideo(1)} className={styles.pb4} />
        </div>

        {/* Extra videos if any */}
        {videos.length > 2 && (
          <div className={styles.extraVideos}>
            {videos.slice(2).map((v, i) => (
              <div key={i} className={`${styles.panel} ${styles.videoPanel} sr`}>
                <video src={v.src} className={styles.media} autoPlay muted loop playsInline />
                <div className={styles.pcap}>Video {i + 3} ★</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoSection;
