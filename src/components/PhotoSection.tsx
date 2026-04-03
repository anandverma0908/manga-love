import React, { useEffect, useRef, useState } from 'react';
import styles from './PhotoSection.module.css';
import { PhotoPanel, VideoItem } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

// props kept so App.tsx doesn't need changes
interface Props { photos: PhotoPanel[]; videos: VideoItem[]; }

/* ── animated ECG line ── */
const EcgLine: React.FC<{ label: string; spike?: boolean; color?: string; delay?: number }> = ({
  label, spike = false, color = 'var(--red)', delay = 0
}) => {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add(styles.ecgVisible), delay);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // flat line path vs spike path
  const flatPath  = 'M0,30 L60,30 L70,30 L80,30 L340,30 L360,30';
  const spikePath = 'M0,30 L60,30 L70,30 L80,5 L90,55 L100,30 L340,30 L360,30';

  return (
    <div className={styles.ecgRow} style={{ '--ecg-color': color } as React.CSSProperties}>
      <svg ref={ref} className={styles.ecgSvg} viewBox="0 0 360 60"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path className={spike ? styles.ecgSpike : styles.ecgFlat}
          d={spike ? spikePath : flatPath}
          fill="none" stroke={color} strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
        />
        {spike && (
          <circle cx="90" cy="55" r="4" fill={color} opacity="0.6"
            className={styles.ecgDot} />
        )}
      </svg>
      <span className={styles.ecgLabel} style={{ color }}>{label}</span>
    </div>
  );
};

/* ── single memory panel ── */
interface MemoryPanelProps {
  icon: string;
  title: string;
  text: string;
  color: string;
  delay?: number;
  tilt?: number;
}
const MemoryPanel: React.FC<MemoryPanelProps> = ({
  icon, title, text, color, delay = 0, tilt = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add(styles.memVisible), delay);
          obs.disconnect();
        }
      });
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={styles.memPanel}
      style={{ '--mem-color': color, '--mem-tilt': `${tilt}deg` } as React.CSSProperties}>
      <div className={styles.memBorder} />
      <div className={styles.memHt} />
      <div className={styles.memIcon}>{icon}</div>
      <div className={styles.memTitle}>{title}</div>
      <div className={styles.memText}>{text}</div>
      <div className={styles.memTag} style={{ background: color }}>
        THUMP ♥
      </div>
    </div>
  );
};

/* ── flatline moment ── */
interface FlatlineProps { text: string; delay?: number; }
const FlatlineMoment: React.FC<FlatlineProps> = ({ text, delay = 0 }) => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${styles.flatline} sr`}
      style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}>
      <div className={styles.flatlineEcg}>
        <svg viewBox="0 0 360 40" xmlns="http://www.w3.org/2000/svg" className={styles.flatlineSvg}>
          <path d="M0,20 L360,20" fill="none" stroke="rgba(232,25,44,0.35)"
            strokeWidth="2" strokeDasharray="6 4" />
        </svg>
      </div>
      <div className={styles.flatlineText}>{text}</div>
    </div>
  );
};

/* ── the big heartbeat monitor ── */
const HeartMonitor: React.FC = () => {
  const [beating, setBeating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setBeating(true); });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.monitor}>
      <div className={styles.monitorScreen}>
        <div className={styles.monitorGlow} />
        {/* the animated ECG path */}
        <svg className={styles.monitorSvg} viewBox="0 0 800 120"
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* grid lines */}
          {[0,1,2,3,4].map(i => (
            <line key={i} x1="0" y1={i * 30} x2="800" y2={i * 30}
              stroke="rgba(0,200,100,0.08)" strokeWidth="1"/>
          ))}
          {[0,1,2,3,4,5,6,7].map(i => (
            <line key={i} x1={i * 115} y1="0" x2={i * 115} y2="120"
              stroke="rgba(0,200,100,0.08)" strokeWidth="1"/>
          ))}
          {/* ECG waveform — multiple spikes for "her" */}
          <path
            className={`${styles.monitorPath} ${beating ? styles.monitorDraw : ''}`}
            d="M0,60 L80,60 L90,60 L100,20 L110,100 L120,60 L200,60 L210,60 L220,20 L230,100 L240,60 L340,60 L350,60 L360,20 L370,100 L380,60 L480,60 L490,60 L500,20 L510,100 L520,60 L620,60 L630,60 L640,20 L650,100 L660,60 L760,60 L800,60"
            fill="none" stroke="#00e080" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
        <div className={styles.monitorLabel}>
          <span className={styles.monitorBpm}>
            {beating ? '♥ 147 BPM' : '— BPM'}
          </span>
          <span className={styles.monitorSub}>every spike = her</span>
        </div>
      </div>
      <div className={styles.monitorBase}>
        <div className={styles.monitorBaseDot} />
        <span className={styles.monitorBaseText}>HIS HEART. LIVE.</span>
        <div className={styles.monitorBaseDot} />
      </div>
    </div>
  );
};

const PhotoSection: React.FC<Props> = () => {
  const hdrRef = useScrollReveal<HTMLDivElement>();
  const ecgRef = useScrollReveal<HTMLDivElement>();
  const memRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="photos">
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      {/* ══ HEADER ══ */}
      <div ref={hdrRef} className={`${styles.header} sr`}>
        <div className={styles.secNum}>02</div>
        <div>
          <div className={styles.secTtl}>
            HIS HEARTBEAT
            <span>★ every spike is a memory of her ★</span>
          </div>
        </div>
        <div className={styles.headerStamp}>
          <span>STILL</span>
          <span>BEATING</span>
          <span>♥</span>
        </div>
      </div>

      {/* ══ BLOCK 1 — THE MONITOR ══ */}
      <div className={styles.monitorSection}>
        <p className={styles.monitorCaption}>
          Before her — it was quiet.<br />
          The moment she walked in — it never stopped.
        </p>
        <HeartMonitor />
        <p className={styles.monitorCaption2}>
          ★ Every spike you see is a thought of her ★
        </p>
      </div>

      {/* ══ BLOCK 2 — ECG ROWS ══ */}
      <div ref={ecgRef} className={`${styles.ecgSection} sr`}>
        <div className={styles.ecgSectionTitle}>WHAT MAKES IT SPIKE</div>
        <div className={styles.ecgRows}>
          <EcgLine label="Normal day"       spike={false} color="rgba(255,255,255,0.3)" delay={100} />
          <EcgLine label="She laughs"       spike color="var(--yellow)"  delay={300} />
          <EcgLine label="She texts back"   spike color="var(--cyan)"    delay={500} />
          <EcgLine label="She's near him"   spike color="var(--pink)"    delay={700} />
          <EcgLine label="She smiles at him" spike color="var(--yellow)" delay={900} />
          <EcgLine label="She doesn't reply" spike={false} color="rgba(255,255,255,0.2)" delay={1100} />
          <EcgLine label="He thinks of her at 2am" spike color="var(--red)"  delay={1300} />
          <EcgLine label="She walks into the room"  spike color="var(--yellow)" delay={1500} />
        </div>
      </div>

      {/* ══ BLOCK 3 — MEMORY PANELS ══ */}
      <div ref={memRef} className={`${styles.memSection} sr`}>
        <div className={styles.memSectionTitle}>
          THE MEMORIES THAT KEEP IT GOING
        </div>
        <div className={styles.memGrid}>
          <MemoryPanel
            icon="" color="var(--yellow)" tilt={-2} delay={200}
            title="The way she laughs"
            text="Before the joke is even finished. Every time. His heart doesn't stand a chance."
          />
          <MemoryPanel
            icon="" color="var(--cyan)" tilt={1} delay={350}
            title="Late night conversations"
            text="When the whole world was asleep and it was just them. Those moments were his whole universe."
          />
          <MemoryPanel
            icon="" color="var(--pink)" tilt={-1} delay={500}
            title="The moment she looks at him"
            text="Not a big look. Just a glance. Casual. Like he's someone she trusts. That alone undoes him."
          />
          <MemoryPanel
            icon="" color="var(--yellow)" tilt={2} delay={650}
            title="When she's comfortable enough to be quiet"
            text="Not every moment needs words. The ones where she's just herself — those are his favourite."
          />
          <MemoryPanel
            icon="" color="var(--red)" tilt={-2} delay={800}
            title="Her on an ordinary Tuesday"
            text="Not a special day. Just her, being herself, existing in his world. That is enough. That has always been enough."
          />
          <MemoryPanel
            icon="" color="var(--cyan)" tilt={1} delay={950}
            title="When she tells him something real"
            text="The moments she shares something she doesn't tell everyone. He holds those like they're fragile. Because they are."
          />
        </div>
      </div>

      {/* ══ FLATLINE MOMENTS — things that hurt ══ */}
      <div className={styles.flatlineSection}>
        <div className={styles.flatlineSectionTitle}>
          WHAT MAKES IT QUIET
          <span>— not her fault. never her fault. just hard.</span>
        </div>
        <FlatlineMoment text="Three months of not knowing if she still believes in him." delay={0} />
        <FlatlineMoment text="Loving her past the noise someone else made." delay={100} />
        <FlatlineMoment text="Carrying the weight of being misunderstood by the one person who matters most." delay={200} />
        <FlatlineMoment text="Staying when everything around him said it might be easier not to." delay={300} />
      </div>

      {/* ══ CONCLUSION — THE COMEBACK ══ */}
      <div className={styles.conclusion}>
        <div className={styles.conclusionHt} />
        <div className={styles.conclusionInner}>
          <div className={styles.conclusionEcg}>
            <svg viewBox="0 0 400 80" xmlns="http://www.w3.org/2000/svg"
              className={styles.conclusionSvg}>
              <path
                d="M0,40 L80,40 L90,40 L100,5 L110,75 L120,40 L200,40 L210,40 L220,5 L230,75 L240,40 L320,40 L330,40 L340,5 L350,75 L360,40 L400,40"
                fill="none" stroke="var(--yellow)" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round"
                className={styles.conclusionPath}
              />
            </svg>
          </div>
          <p className={styles.conclusionTitle}>
            STILL BEATING.
          </p>
          <p className={styles.conclusionSub}>
            After everything — the noise, the doubt, the three months of quiet pain —
          </p>
          <p className={styles.conclusionBig}>
            it beats for her.<br />
            <em>only her.</em><br />
            it always will.
          </p>
          <div className={styles.conclusionHeart}>
            <span>💛</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default PhotoSection;
