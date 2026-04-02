import React from "react";
import styles from "./PoemSection.module.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PoemSection: React.FC = () => {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const taRef = useScrollReveal<HTMLTextAreaElement>();
  const ftrRef = useScrollReveal<HTMLDivElement>();

  const poemTitle = "✦ I Loved You Quietly ✦";

  const poemText = `I never made a scene, I never made a sound,
I just watched you from the place where I was found
somewhere in the middle of an ordinary day,
when you smiled at nothing much and stole my breath away.
No announcement, no confession, no grand poetic line,
just the quiet realisation oh, I think that you are mine.
Not mine to keep, not mine to claim, not mine to hold too tight,
just mine the way the moon believes it's meant to hold the night.

I loved you in the details that you never thought to show
the way you bite your lip when there is something that you know,
the way you laugh too early, way before the punchline lands,
the way you talk with all your heart and both your restless hands.
I loved you in the Tuesday when the sky was dull and grey,
when you weren't trying to be anything and gave yourself away
not the version dressed for people, not the smile you keep on cue,
but the quiet, tired, real and raw and undefended you.
That version of you is the one I fell for
the one that doesn't know it's beautiful, the one that doesn't have to try,
the one that doesn't even know it's loved but somehow gets by
God, that version of you is the one I love, the one I see when I close my eyes
that is where I fell for you.

I counted all the moments that I nearly said the words,
they stack up like a flock of songs in unrecorded birds
at the end of every evening when the night was soft and deep,
when you said goodnight and hung up and I couldn't fall asleep.
I held my phone in silence and I stared up at the ceiling,
trying to find the language for this unbearable feeling
but every word felt smaller than the thing I had inside,
so I swallowed it like always, tucked it somewhere safe to hide.

I loved you without asking you for anything in return,
the way a candle doesn't need the darkness to confirm it burns
it simply gives its light away and doesn't keep the score,
and even as it flickers low, it tries to give some more.
That is what this feels like
not a bargain, not a game,
not a love that comes with conditions or a heart that stakes a claim.
Just a love that shows up quietly and sits beside you still,
not because it has to but because it always will.

I loved you when you doubted every beautiful thing you are,
when you looked into the mirror and you couldn't see the star
I wanted to reach through every wall you carefully had laid
and say you are the reason light was invented, don't be afraid.
I loved you when you were distant and I couldn't find the door,
when I didn't know what you were feeling or what you needed more
I just stayed, because the staying was the only thing I knew,
because leaving never once crossed the part of me that's you.

There is a kind of loving that the loud world never sees,
it doesn't trend, it doesn't shout, it doesn't aim to please
it just folds itself into the fabric of your every day,
in every small and ordinary and forgettable way.
It's in the things I remembered that you mentioned once in passing,
it's in the way I hoped each time I saw you it was lasting,
it's in the silence after laughter when I looked at you and knew
that every version of my future somehow started here, with you.

I do not know the map of what you carry in your chest,
I do not know if what I am to you is second, first or best
and I have made my peace with all the things I cannot know,
because some flowers bloom in quiet and some rivers barely flow.
But what I know is this
and I need you to receive it,
press it to your chest like something fragile and believe it

I love you.
Not the version I perform for anyone who's watching,
not the version wrapped in poetry to make it less than haunting 
the real kind. The kind that scares me. The kind I can't undo.
The steady, certain, patient, quiet kind — and it is only you.
It was only ever you.
On every ordinary Tuesday,
in every unremarkable room,
in every silence where I almost said it,
in every night I held it like a wound
it was you.
It has always,
quietly,
faithfully,
completely
been you.

Still yours, whether you know it or not. 💛`;

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
            WORDS
            <br />
            <em>
              I
              <br />
              ALMOST
            </em>
            <br />
            SAID
          </h2>

          <div className={styles.thought}>
            <p>
              There's so much I want to tell you... I just hope you can feel it{" "}
              <br />
              even when I can't say it. ♥
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
