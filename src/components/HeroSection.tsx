import React, { useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

/* animated counter hook */
function useCountUp(target: number, duration: number, start: boolean) {
  const [val, setVal] = React.useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

interface StatRowProps {
  label: string;
  value?: string | number;
  unit?: string;
  color?: string;
  delay?: number;
  animate?: boolean;
  animTarget?: number;
  infinity?: boolean;
}

const StatRow: React.FC<StatRowProps> = ({
  label, value, unit = '', color = 'var(--yellow)', delay = 0,
  animate = false, animTarget = 0, infinity = false,
}) => {
  const [started, setStarted] = React.useState(false);
  const counted = useCountUp(animTarget, 1200, started && animate);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.classList.add(styles.statRowVisible);
      if (animate) setStarted(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, animate]);

  const displayVal = infinity ? '∞' : animate ? counted + unit : (value ?? '') + unit;

  return (
    <div ref={ref} className={styles.statRow}>
      <span className={styles.statLabel}>{label}</span>
      <div className={styles.statBarWrap}>
        <div className={styles.statBar}
          style={{ '--bar-color': color, '--bar-delay': `${delay + 300}ms` } as React.CSSProperties}
        />
      </div>
      <span className={styles.statValue} style={{ color }}>{displayVal}</span>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className="ht" />

      <div className={styles.cornerTag}>VOL.4 ★ THE TRUTH HE CARRIED ALONE</div>

      <div className={styles.priceSticker}>
        <span className={styles.priceLabel}>ONLY</span>
        <span className={styles.priceVal}>♥4</span>
      </div>

      {/* floating action words */}
      <span className={styles.aw} style={{ top: '12%', left: '4%', fontSize: 'clamp(1.2rem,3.5vw,2.5rem)', color: 'var(--red)', '--r': '-13deg', animationDuration: '2.8s' } as React.CSSProperties}>BETRAYED~</span>
      <span className={styles.aw} style={{ bottom: '28%', left: '2%', fontSize: 'clamp(1rem,2.5vw,1.9rem)', color: 'var(--cyan)', '--r': '9deg', animationDuration: '3.2s', animationDelay: '.5s' } as React.CSSProperties}>TRUTH!</span>
      <span className={styles.aw} style={{ top: '20%', right: '53%', fontSize: 'clamp(1rem,2.8vw,2.2rem)', color: 'var(--yellow)', '--r': '-6deg', animationDuration: '2.5s', animationDelay: '1s', zIndex: 16 } as React.CSSProperties}>STILL HERE.</span>

      <div className={styles.grid}>

        {/* ══ LEFT ══ */}
        <div className={styles.left}>
          <div className="ht" />
          <span className={styles.chLabel}>★ CHAPTER 01 ★</span>
          <h1 className={styles.title}>
            THE ONE<br /><em>WHO</em><br />STAYED
          </h1>
          <p className={styles.subtitle}>
            They tried to end his story.<br />
            He never stopped writing it.<br />
            This is everything he never got to say.
          </p>
          <div className={styles.bubble}>
            <p>"I didn't fight back.<br />I just stayed.<br />Because you were worth<br />every single bit of it." ★</p>
          </div>
        </div>

        {/* ══ RIGHT ══ */}
        <div className={styles.right}>
          <div className="spd" />
          <div className="ht-r" />
          <div className={styles.effectTxt}>♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥</div>

          <div className={styles.rightInner}>

            {/* Heart */}
            <div className={styles.heartWrap}>
              <svg viewBox="0 0 300 300" className={styles.heartSvg} xmlns="http://www.w3.org/2000/svg">
                <g opacity=".38">
                  <line x1="150" y1="150" x2="10"  y2="8"   stroke="#fff" strokeWidth="2"/>
                  <line x1="150" y1="150" x2="75"  y2="0"   stroke="#fff" strokeWidth="1.5"/>
                  <line x1="150" y1="150" x2="150" y2="0"   stroke="#fff" strokeWidth="2"/>
                  <line x1="150" y1="150" x2="225" y2="0"   stroke="#fff" strokeWidth="1.5"/>
                  <line x1="150" y1="150" x2="292" y2="18"  stroke="#fff" strokeWidth="2"/>
                  <line x1="150" y1="150" x2="300" y2="75"  stroke="#fff" strokeWidth="1.5"/>
                  <line x1="150" y1="150" x2="300" y2="150" stroke="#fff" strokeWidth="2"/>
                  <line x1="150" y1="150" x2="300" y2="225" stroke="#fff" strokeWidth="1.5"/>
                  <line x1="150" y1="150" x2="258" y2="295" stroke="#fff" strokeWidth="2"/>
                  <line x1="150" y1="150" x2="150" y2="300" stroke="#fff" strokeWidth="1.5"/>
                  <line x1="150" y1="150" x2="42"  y2="295" stroke="#fff" strokeWidth="2"/>
                  <line x1="150" y1="150" x2="0"   y2="225" stroke="#fff" strokeWidth="1.5"/>
                  <line x1="150" y1="150" x2="0"   y2="150" stroke="#fff" strokeWidth="2"/>
                  <line x1="150" y1="150" x2="0"   y2="75"  stroke="#fff" strokeWidth="1.5"/>
                </g>
                <defs>
                  <clipPath id="hc">
                    <path d="M150,240 C150,240 38,162 38,98 C38,63 63,43 93,43 C116,43 137,57 150,74 C163,57 184,43 207,43 C237,43 262,63 262,98 C262,162 150,240 150,240Z"/>
                  </clipPath>
                  <pattern id="hp" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="4" cy="4" r="1.8" fill="#ffb0bc" opacity=".6"/>
                  </pattern>
                </defs>
                <path d="M150,240 C150,240 38,162 38,98 C38,63 63,43 93,43 C116,43 137,57 150,74 C163,57 184,43 207,43 C237,43 262,63 262,98 C262,162 150,240 150,240Z"
                  fill="#fff" stroke="#0a0806" strokeWidth="5" strokeLinejoin="round"/>
                <g clipPath="url(#hc)">
                  <rect x="30" y="38" width="240" height="212" fill="url(#hp)"/>
                </g>
                <ellipse cx="108" cy="78" rx="12" ry="8" fill="#fff" opacity=".7" transform="rotate(-30 108 78)"/>
                {/* crack lines on heart — broken but still whole */}
                <path d="M150,90 L140,120 L155,130 L142,165" stroke="#e8192c" strokeWidth="2.5" fill="none" opacity=".5" strokeLinecap="round"/>
                <path d="M170,100 L162,128 L172,138" stroke="#e8192c" strokeWidth="1.5" fill="none" opacity=".4" strokeLinecap="round"/>
                <text x="58"  y="52"  fontSize="17" fill="#ff6b8a" stroke="#0a0806" strokeWidth="1">♥</text>
                <text x="228" y="58"  fontSize="13" fill="#ff6b8a" stroke="#0a0806" strokeWidth="1">♥</text>
                <text x="242" y="185" fontSize="12" fill="#ff6b8a" stroke="#0a0806" strokeWidth="1">♥</text>
                <text x="43"  y="202" fontSize="15" fill="#ff6b8a" stroke="#0a0806" strokeWidth="1">♥</text>
              </svg>
              {/* cracked but beating label */}
              <div className={styles.dokiCracked}>
                <span className={styles.dokiCrackedLine}>BROKEN.</span>
                <span className={styles.dokiCrackedLine2}>STILL BEATING. ♥</span>
              </div>
            </div>

            {/* Stats Card */}
            <div className={styles.statsCard}>
              <div className={styles.statsHeader}>
                <span className={styles.statsHeaderLabel}>★ THE TRUTH ★</span>
                <span className={styles.statsHeaderSub}>— HIM —</span>
              </div>

              <div className={styles.statsBody}>
                <StatRow label="Things he lied about"       value={0}               color="#a0e080"       delay={800} />
                <StatRow label="Times he stayed anyway"     infinity                color="var(--yellow)" delay={1000} />
                <StatRow label="Nights it broke him inside" value="too many"        color="var(--red)"    delay={1200} />
                <StatRow label="Things the villain got right" value={0}             color="var(--cyan)"   delay={1400} />
                <StatRow label="3 months of haunting"       value="every day"       color="var(--pink)"   delay={1600} />
                <StatRow label="How much he loves her"      value="all of it"       color="var(--yellow)" delay={1800} />
              </div>

              <div className={styles.statsFooter}>
                <div className={styles.stamp}>
                  <span className={styles.stampLine1}>STATUS</span>
                  <span className={styles.stampLine2}>STILL HERE.</span>
                  <span className={styles.stampLine3}>STILL HIM.</span>
                </div>
                <p className={styles.statsFooterText}>
                  ★ The truth always outlasts the lie ★
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.scrollArr}>▼ TURN THE PAGE ▼</div>
    </section>
  );
};

export default HeroSection;
