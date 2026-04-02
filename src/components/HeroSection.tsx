import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className="ht" />

      {/* corner tag */}
      <div className={styles.cornerTag}>VOL.2 ★ COLLECTOR'S EDITION</div>

      {/* price sticker */}
      <div className={styles.priceSticker}>
        <span className={styles.priceLabel}>ONLY</span>
        <span className={styles.priceVal}>♥2</span>
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
        THUMP!
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
        BLUSH~
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
        AGAIN!
      </span>

      <div className={styles.grid}>
        {/* ── LEFT panel ── */}
        <div className={styles.left}>
          <div className="ht" />

          <span className={styles.chLabel}>
            ★ CHAPTER 01 ★
          </span>

          <h1 className={styles.title}>
            MY
            <br />
            <em>SIDE OF</em>
            <br />
            THE STORY
          </h1>

          <p className={styles.subtitle}>
            A boy. A girl. And all the things
            <br />
            he never quite found the words to say.
          </p>

          <div className={styles.bubble}>
            <p>
              "I don't know what this is yet... but I know I don't want it to
              stop." ★
            </p>
          </div>
        </div>

        {/* ── RIGHT panel ── */}
        <div className={styles.right}>
          <div className="spd" />
          <div className="ht-r" />
          <div className={styles.effectTxt}>
            ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥ ♥
          </div>

          <div className={styles.heartWrap}>
            <svg
              viewBox="0 0 300 300"
              className={styles.heartSvg}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* speed lines */}
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

              {/* heart fill */}
              <path
                d="M150,240 C150,240 38,162 38,98 C38,63 63,43 93,43 C116,43 137,57 150,74 C163,57 184,43 207,43 C237,43 262,63 262,98 C262,162 150,240 150,240Z"
                fill="#fff"
                stroke="#0a0806"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              {/* halftone inside */}
              <g clipPath="url(#hc)">
                <rect x="30" y="38" width="240" height="212" fill="url(#hp)" />
              </g>
              {/* glint */}
              <ellipse
                cx="108"
                cy="78"
                rx="12"
                ry="8"
                fill="#fff"
                opacity=".7"
                transform="rotate(-30 108 78)"
              />
              {/* floating mini hearts */}
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

            <div className={styles.doki}>★&nbsp;THUMP&nbsp;THUMP&nbsp;YOU&nbsp;★</div>
          </div>
        </div>
      </div>

      <div className={styles.scrollArr}>▼ TURN THE PAGE ▼</div>
    </section>
  );
};

export default HeroSection;
