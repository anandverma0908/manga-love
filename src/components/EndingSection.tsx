import React from 'react';
import styles from './EndingSection.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EndingSection: React.FC = () => {
  const sfxRef = useScrollReveal();
  const heartRef = useScrollReveal();
  const sbRef = useScrollReveal();
  const titleRef = useScrollReveal();
  const theEndRef = useScrollReveal();
  const nextRef = useScrollReveal();
  const credRef = useScrollReveal();

  return (
    <section className={styles.section} id="ending">
      <div className="spd" />
      <div className="ht-r" />

      {/* background float text */}
      <div className={styles.efBg} style={{ fontSize: 'clamp(6rem,16vw,12rem)', top: '4%', left: '-2%', '--r': '-10deg', animationDuration: '5s', color: '#fff', opacity: 0.05 } as React.CSSProperties}>♥</div>
      <div className={styles.efBg} style={{ fontSize: 'clamp(4rem,10vw,8rem)', bottom: '9%', right: '-1%', '--r': '12deg', animationDuration: '4s', animationDelay: '1.2s', color: '#fff', opacity: 0.06 } as React.CSSProperties}>★</div>
      <div className={styles.efBg} style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', top: '45%', left: '46%', '--r': '-5deg', animationDuration: '3.5s', animationDelay: '0.6s', color: '#fff', opacity: 0.05 } as React.CSSProperties}>✦</div>

      <div className={styles.grid}>
        {/* LEFT — dramatic SFX */}
        <div className={styles.left}>
          <div className="ht-y" />
          <div className="spd" />

          <div ref={sfxRef} className={`${styles.sfxBig} sr`}>
            PIKO<br />PIKO<br />
            <span className={styles.sfxForever}>FOREVER</span>
          </div>

          <div ref={heartRef} className={`${styles.heartAnim} sr`} style={{ transitionDelay: '0.28s' }}>
            <svg viewBox="0 0 200 160" width="min(185px,70vw)" height="min(148px,56vw)" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="hc2">
                  <path d="M100,140 C100,140 18,88 18,48 C18,23 36,10 56,10 C73,10 89,21 100,35 C111,21 127,10 144,10 C164,10 182,23 182,48 C182,88 100,140 100,140Z"/>
                </clipPath>
                <pattern id="hp2" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
                  <circle cx="3.5" cy="3.5" r="1.5" fill="var(--yellow2)" opacity=".6"/>
                </pattern>
              </defs>
              <path d="M100,140 C100,140 18,88 18,48 C18,23 36,10 56,10 C73,10 89,21 100,35 C111,21 127,10 144,10 C164,10 182,23 182,48 C182,88 100,140 100,140Z" fill="var(--yellow)" stroke="#0a0806" strokeWidth="4"/>
              <g clipPath="url(#hc2)">
                <rect x="12" y="5" width="175" height="140" fill="url(#hp2)"/>
              </g>
              <ellipse cx="70" cy="38" rx="10" ry="7" fill="#fff" opacity=".6" transform="rotate(-25 70 38)"/>
              {[{x:28,y:26,s:13},{x:158,y:33,s:11},{x:155,y:115,s:10}].map((h,i)=>(
                <text key={i} x={h.x} y={h.y} fontSize={h.s} fill="#e8192c" stroke="#0a0806" strokeWidth="1">♥</text>
              ))}
            </svg>
          </div>

          <div ref={sbRef} className={`${styles.endSb} sr`} style={{ transitionDelay: '0.5s' }}>
            <p>★ You are the main character<br />of every story I want to live. ★</p>
          </div>
        </div>

        {/* RIGHT — The End */}
        <div className={styles.right}>
          <div className="ht" />

          <h2 ref={titleRef} className={`${styles.endTitle} sr`}>
            TO BE<br />LOVED<br />
            <span className={styles.endTitleAccent}>ALWAYS</span>
          </h2>

          <div ref={theEndRef} className={`${styles.theEnd} sr`} style={{ transitionDelay: '0.2s' }}>
            <p>THE END</p>
            <small>★ but really, just the beginning ★</small>
          </div>

          <div ref={nextRef} className={`${styles.nextIss} sr`} style={{ transitionDelay: '0.38s' }}>
            <div className={styles.nextLbl}>▶ NEXT ISSUE PREVIEW</div>
            <div className={styles.nextTtl}>VOL. 2 — "EVERY DAY WITH YOU"</div>
            <div className={styles.nextSub}>More adventures, more laughter, more love forever. ♥</div>
          </div>

          {/* <div ref={credRef} className={`${styles.creditsBox} sr`} style={{ transitionDelay: '0.55s' }}>
            <div className={styles.credLbl}>CREDITS</div>
            <div className={styles.credBody}>
              Story &amp; Art: <em>Made with ♥</em><br />
              Leading Role: <em>You ★</em><br />
              Music: <em>Press ♪ top-right</em>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EndingSection;
