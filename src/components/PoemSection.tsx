import React from "react";
import styles from "./PoemSection.module.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PoemSection: React.FC = () => {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const taRef = useScrollReveal<HTMLTextAreaElement>();
  const ftrRef = useScrollReveal<HTMLDivElement>();

  const poemTitle = "✦ In Every Line, It’s You ✦";

  const poemText = `I still find it funny, in the sweetest way,
how life brought you to me on an ordinary day,
Through LinkedIn of all places, simple and blue,
yet somehow, it led my whole world to you  

From a message, a laugh, a moment so small,
I didn’t even notice when you became my all,
Somewhere between “hi” and the talks we grew into,
my heart quietly started choosing you  

Ladoo… even your name feels warm and light,
like a soft little comfort I hold on tight,
A name I could whisper a thousand times,
and still feel magic in every rhyme  

Your curly hair dancing without a care,
like even the wind gets lost in there,
Your beautiful eyes, so gentle, so true,
like they’re telling stories only I can view  

And your smile… I don’t know where to start,
it doesn’t just shine it rewrites my heart,
Turns ordinary days into something new,
just by being there, just by being you  

And when you say “don’t kiss me” that way,
so soft, so cute I just want to stay,
right in that moment, a little longer than I should,
because everything about you just feels so good  

It’s never just big things, it’s all the small parts,
the laughs, the silence, the unspoken hearts,
The way you exist, so simply, so true,
makes everything brighter just because it’s you  

If love were pages, I’d write you in all,
in every line, every rise, every fall,
And even then, it wouldn’t be enough to say,
how much you’ve changed me in every way  

You’re not just someone I happened to find,
you’re peace to my chaos, calm to my mind,
Not just my world but the reason it’s right,
the reason my days feel warm and bright  

And if this story keeps turning its page,
through every chapter, through every stage,
One thing will stay, simple and true

In every lifetime,
I’ll still choose you.`;

  return (
    <section className={styles.section} id="poem">
      <div className={styles.inkStripes} />

      <div className={styles.grid}>
        {/* LEFT — decoration */}
        <div ref={leftRef} className={`${styles.left} sr`}>
          <div className="spd" />

          <div
            className={styles.floatSym}
            style={
              {
                fontSize: "clamp(4rem,10vw,7rem)",
                top: "5%",
                left: "10%",
                "--r": "-15deg",
                animationDuration: "3s",
                color: "var(--red)",
                opacity: 0.08,
              } as React.CSSProperties
            }
          >
            ♥
          </div>
          <div
            className={styles.floatSym}
            style={
              {
                fontSize: "clamp(3rem,7vw,4.5rem)",
                bottom: "14%",
                right: "5%",
                "--r": "11deg",
                animationDuration: "4s",
                animationDelay: "1s",
                color: "var(--yellow)",
                opacity: 0.09,
              } as React.CSSProperties
            }
          >
            ★
          </div>
          <div
            className={styles.floatSym}
            style={
              {
                fontSize: "clamp(2rem,4vw,2.8rem)",
                top: "42%",
                right: "8%",
                "--r": "-5deg",
                animationDuration: "2.5s",
                animationDelay: "0.5s",
                color: "#fff",
                opacity: 0.07,
              } as React.CSSProperties
            }
          >
            ✦
          </div>

          <p className={styles.chapterLabel}>★ CHAPTER 03 ★</p>
          <h2 className={styles.bigTitle}>
            INK
            <br />
            <em>
              FROM
              <br />
              MY
            </em>
            <br />
            HEART
          </h2>

          <div className={styles.thought}>
            <p>
              If I couldn’t say it, I wrote it... for you. ♥
            </p>
          </div>

          <div className={styles.iconRow}>
            {[
              { bg: "var(--yellow)", icon: "★", color: "var(--ink)" },
              { bg: "var(--red)", icon: "♥", color: "#fff" },
              { bg: "#fff", icon: "✦", color: "var(--ink)" },
              { bg: "var(--cyan)", icon: "☆", color: "var(--ink)" },
            ].map((sq, i) => (
              <div
                key={i}
                className={styles.iconSq}
                style={{ background: sq.bg, color: sq.color }}
              >
                {sq.icon}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — writing area */}
        <div className={styles.right}>
          <div className="ht-y" />

          <div ref={titleRef} className={`${styles.poemHdr} sr`}>
            <div className={styles.hdrLine} />
            <input
              className={styles.titleInput}
              type="text"
              readOnly
              value={poemTitle}
              maxLength={40}
              aria-label="Poem title"
            />
            <div className={styles.hdrLine} />
          </div>

          <textarea
            ref={taRef}
            readOnly
            className={`${styles.poemTa} sr`}
            rows={14}
            aria-label="Poem"
            value={poemText}
          />

          <div ref={ftrRef} className={`${styles.footer} sr`}>
            <div className={styles.signature}>— with all my love ♥</div>
            <div className={styles.footerRight}>
              <span className={styles.hearts}>♥♥♥</span>
              <div className={styles.pageNum}>pg. 03</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
