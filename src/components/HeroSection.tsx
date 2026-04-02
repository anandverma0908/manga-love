import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

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

/* single stat row */
interface StatRowProps {
  label: string;
  value: string | number;
  unit?: string;
  color?: string;
  delay?: number;
  animate?: boolean;
  animTarget?: number;
  infinity?: boolean;
}
const StatRow: React.FC<StatRowProps> = ({
  label,
  value,
  unit = "",
  color = "var(--yellow)",
  delay = 0,
  animate = false,
  animTarget = 0,
  infinity = false,
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

  const displayVal = infinity ? "∞" : animate ? counted + unit : value + unit;

  return (
    <div ref={ref} className={styles.statRow}>
      <span className={styles.statLabel}>{label}</span>
      <div className={styles.statBarWrap}>
        <div
          className={styles.statBar}
          style={
            {
              "--bar-color": color,
              "--bar-delay": `${delay + 300}ms`,
            } as React.CSSProperties
          }
        />
      </div>
      <span className={styles.statValue} style={{ color }}>
        {displayVal}
      </span>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className="ht" />

      {/* corner tag */}
      <div className={styles.cornerTag}>
        VOL.3 ★ THE ONE THAT CHANGES EVERYTHING
      </div>

      {/* price sticker */}
      <div className={styles.priceSticker}>
        <span className={styles.priceLabel}>ONLY</span>
        <span className={styles.priceVal}>♥3</span>
      </div>

      {/* floating action words */}
      <span
        className={styles.aw}
        style={
          {
            top: "12%",
            left: "4%",
            fontSize: "clamp(1.5rem,4vw,3rem)",
            color: "var(--red)",
            "--r": "-13deg",
            animationDuration: "2.8s",
          } as React.CSSProperties
        }
      >
        CRACK!
      </span>
      <span
        className={styles.aw}
        style={
          {
            bottom: "28%",
            left: "2%",
            fontSize: "clamp(1rem,2.5vw,1.9rem)",
            color: "var(--blue)",
            "--r": "9deg",
            animationDuration: "3.2s",
            animationDelay: ".5s",
          } as React.CSSProperties
        }
      >
        FEEL IT~
      </span>
      <span
        className={styles.aw}
        style={
          {
            top: "20%",
            right: "53%",
            fontSize: "clamp(1.2rem,3vw,2.5rem)",
            color: "var(--red)",
            "--r": "-6deg",
            animationDuration: "2.5s",
            animationDelay: "1s",
            zIndex: 16,
          } as React.CSSProperties
        }
      >
        SAY!
      </span>

      <div className={styles.grid}>
        {/* ══ LEFT panel ══ */}
        <div className={styles.left}>
          <div className="ht" />
          <span className={styles.chLabel}>★ CHAPTER 01 ★</span>
          <h1 className={styles.title}>
            EVEN
            <br />
            <em>IF YOU</em>
            <br />
            DON'T
          </h1>
          <p className={styles.subtitle}>
            He gave everything. She didn't know.
            <br />
            This is the page where she finds out.
          </p>
          <div className={styles.bubble}>
            <p>
              "I'm not asking you to love me back. I'm just asking you to know{" "}
              <br />
              that someone does. Completely." ★
            </p>
          </div>
        </div>

        {/* ══ RIGHT panel ══ */}
        <div className={styles.right}>
          <div className="spd" />
          <div className="ht-r" />
          <div className={styles.effectTxt}>
            ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
          </div>

          <div className={styles.rightInner}>
            {/* ── Heart SVG ── */}
            <div className={styles.heartWrap}>
              <svg
                viewBox="0 0 300 300"
                className={styles.heartSvg}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity=".38">
                  <line
                    x1="150"
                    y1="150"
                    x2="10"
                    y2="8"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="75"
                    y2="0"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="150"
                    y2="0"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="225"
                    y2="0"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="292"
                    y2="18"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="300"
                    y2="75"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="300"
                    y2="150"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="300"
                    y2="225"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="258"
                    y2="295"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="150"
                    y2="300"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="42"
                    y2="295"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="0"
                    y2="225"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="0"
                    y2="150"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="150"
                    x2="0"
                    y2="75"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="hc">
                    <path d="M150,240 C150,240 38,162 38,98 C38,63 63,43 93,43 C116,43 137,57 150,74 C163,57 184,43 207,43 C237,43 262,63 262,98 C262,162 150,240 150,240Z" />
                  </clipPath>
                  <pattern
                    id="hp"
                    x="0"
                    y="0"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="4" cy="4" r="1.8" fill="#ffb0bc" opacity=".6" />
                  </pattern>
                </defs>
                <path
                  d="M150,240 C150,240 38,162 38,98 C38,63 63,43 93,43 C116,43 137,57 150,74 C163,57 184,43 207,43 C237,43 262,63 262,98 C262,162 150,240 150,240Z"
                  fill="#fff"
                  stroke="#0a0806"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
                <g clipPath="url(#hc)">
                  <rect
                    x="30"
                    y="38"
                    width="240"
                    height="212"
                    fill="url(#hp)"
                  />
                </g>
                <ellipse
                  cx="108"
                  cy="78"
                  rx="12"
                  ry="8"
                  fill="#fff"
                  opacity=".7"
                  transform="rotate(-30 108 78)"
                />
                <text
                  x="58"
                  y="52"
                  fontSize="17"
                  fill="#ff6b8a"
                  stroke="#0a0806"
                  strokeWidth="1"
                >
                  ♥
                </text>
                <text
                  x="228"
                  y="58"
                  fontSize="13"
                  fill="#ff6b8a"
                  stroke="#0a0806"
                  strokeWidth="1"
                >
                  ♥
                </text>
                <text
                  x="242"
                  y="185"
                  fontSize="12"
                  fill="#ff6b8a"
                  stroke="#0a0806"
                  strokeWidth="1"
                >
                  ♥
                </text>
                <text
                  x="43"
                  y="202"
                  fontSize="15"
                  fill="#ff6b8a"
                  stroke="#0a0806"
                  strokeWidth="1"
                >
                  ♥
                </text>
              </svg>
            </div>

            {/* ── STATS CARD ── */}
            <div className={styles.statsCard}>
              {/* card header */}
              <div className={styles.statsHeader}>
                <span className={styles.statsHeaderLabel}>
                  ★ CHARACTER STATS ★
                </span>
                <span className={styles.statsHeaderSub}>— HIM —</span>
              </div>

              {/* stat rows */}
              <div className={styles.statsBody}>
                <StatRow
                  label="Feelings for her"
                  value=""
                  unit="%"
                  animate
                  animTarget={100}
                  color="var(--red)"
                  delay={800}
                />
                <StatRow
                  label="Times almost said it"
                  value="∞"
                  infinity
                  color="var(--yellow)"
                  delay={1000}
                />
                <StatRow
                  label="Chances taken"
                  value=""
                  unit=""
                  animate
                  animTarget={0}
                  color="var(--cyan)"
                  delay={1200}
                />
                <StatRow
                  label="Times thought of her"
                  value="∞"
                  infinity
                  color="var(--pink)"
                  delay={1400}
                />
                <StatRow
                  label="Regrets"
                  value={0}
                  color="#a0e080"
                  delay={1600}
                />
                <StatRow
                  label="Days she's been on my mind"
                  value="every single one"
                  color="var(--yellow)"
                  delay={1800}
                />
              </div>

              {/* card footer stamp */}
              <div className={styles.statsFooter}>
                <div className={styles.stamp}>
                  <span className={styles.stampLine1}>STATUS</span>
                  <span className={styles.stampLine2}>COMPLETELY</span>
                  <span className={styles.stampLine3}>GONE</span>
                </div>
                <p className={styles.statsFooterText}>
                  ★ No expiry date &nbsp;·&nbsp; Only: Her ★
                </p>
              </div>
            </div>
          </div>
          {/* rightInner */}
        </div>
      </div>

      <div className={styles.scrollArr}>▼ TURN THE PAGE ▼</div>
    </section>
  );
};

export default HeroSection;
