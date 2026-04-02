import React from "react";
import styles from "./PoemSection.module.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PoemSection: React.FC = () => {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const titleRef = useScrollReveal<HTMLDivElement>();
  const taRef = useScrollReveal<HTMLTextAreaElement>();
  const ftrRef = useScrollReveal<HTMLDivElement>();

  const poemTitle = "✦ Even If You Don't ✦";

  const poemText = `I've been standing in this feeling like a house without a roof,
open to the sky and all its weather, asking for no proof
just living in the hoping that someday you'd turn around
and find me where I've always been right here, on solid ground.
I never learned to do this halfway, never learned to care
in small and manageable amounts, in ways that feel like air
I loved you like a flood loves every crack it rushes through,
completely and completely and completely only you.

I know you haven't said it.
I know the air between us holds
a thousand things unspoken,
all the stories still untold
I know you are uncertain,
and I know that you're not sure,
and I have made my peace with all the things
I can't be certain for.
But here is what I cannot make my peace with, cannot fold
and put away and call it done and let the feeling go cold
the way I feel is not a thing that quiets at your doubt,
it doesn't dim because you haven't figured yourself out.

It stays.
God, it stays
like winter staying after everyone's tired of the cold,
like a song that keeps on playing in a story not yet told,
like the light that hits the window at the same time every day
stubborn and consistent and refusing to decay.

I've seen you on the mornings when the world had not been kind,
when you were heavy with the weight of everything your mind
was carrying like luggage through a journey you'd not planned
and all I wanted, all I've ever wanted, was your hand.
Not to fix it. Not to make the heavy thing feel light.
Just to tell you that you didn't have to carry it at night
alone that I was there, that I had always been right here,
that the one thing you could count on in the world was that I'd stay near.

I am not asking for an answer.
I am not asking you to feel
something that you haven't felt,
or validate what's real
I know that hearts can't be instructed,
can't be told which way to fall,
and I would never want a love from you
that wasn't yours at all.
But I need you to receive this
need you to just let it in
the weight of what I'm carrying,
the place where I begin

I begin with you.
Every single morning I begin with you
with the thought of you beside me
in the light that's breaking through,
with the sound of you still laughing
at the end of something long,
with the way you make the quiet feel
like somewhere I belong.
I end with you as well
at the close of every day,
it is your face that finds me
as the waking slips away,
and I do not think I chose this
I do not think I planned
to love someone this quietly,
this fully, this unmanned.

So here it is.
No poetry can dress it further up
I love you.
Not the borrowed kind, not the
kind that quits when things get rough,
not the love that's only present
when the weather's warm and bright
but the showing up regardless,
staying through the longest night,
choosing you in every version,
every chapter, every fight kind.
The kind that has no exit.
The kind that doesn't end.
The kind that would have found you
even if we'd never been.

And even if you don't
even if what's in your chest
is quieter than mine,
or different, or compressed
I want you to know this:
You were loved.
You are loved.
Fully, and completely,
and with every broken part of me
that ever learned to love at all.
You were worth every single moment
of the silence and the fall.

Even if you don't
I do.
I always will.
💛`;

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
            THE THING
            <br />
            <em>
              I'VE BEEN
              <br />
              TOO SCARED
            </em>
            <br />
            TO SAY
          </h2>

          <div className={styles.thought}>
            <p>
              I've rewritten this a hundred times.
              <br />
              Every version said the same thing.
              <br />
              It was always you.
              <br />
              It was only ever you. ♥
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
            <div className={styles.signature}>
              — the boy who loved you before you knew ♥
            </div>
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
