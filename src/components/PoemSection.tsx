import React, { useEffect, useRef } from 'react';
import styles from './PoemSection.module.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* Each stanza revealed on scroll */
interface StanzaProps { lines: string[]; delay?: number; }
const Stanza: React.FC<StanzaProps> = ({ lines, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add(styles.stanzaVisible), delay);
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={styles.stanza}>
      {lines.map((line, i) => (
        <span key={i} className={styles.poemLine}
          style={{ '--line-delay': `${i * 80}ms` } as React.CSSProperties}>
          {line === '' ? <br /> : line}
        </span>
      ))}
    </div>
  );
};

/* Dramatic break — a single line that hits hard */
const DramaticLine: React.FC<{ text: string }> = ({ text }) => {
  const ref = useScrollReveal<HTMLParagraphElement>();
  return <p ref={ref} className={`${styles.dramaticLine} sr`}>{text}</p>;
};

const POEM_STANZAS = [
  [
    'There came a day the sky turned strange above us,',
    'when something uninvited learned to wear a caring face',
    'it came with stories, shadows, secondhand confessions,',
    'and quietly began to dismantle everything we\'d built in place.',
  ],
  [
    'I watched it happen slowly, like a crack along a window,',
    'too fine to see at first but running deeper every day',
    'and suddenly the person I had given everything to',
    'was looking at me differently, and I didn\'t know what to say.',
  ],
  [
    'Because what do you say',
    'when the truth you\'ve always lived by',
    'gets dressed up in a lie',
    'and handed to the one you love?',
    '',
    'What do you say',
    'when someone twists the light',
    'until your shadow looks like something',
    'you never, ever were?',
  ],
  [
    'I said nothing loud.',
    'I didn\'t rage, I didn\'t crumble into pieces',
    'I just sat inside the rubble of what someone else had made',
    'and thought about the girl I loved,',
    'and quietly, I stayed.',
    '',
    'Not because I had no choice,',
    'not because I didn\'t see the cost',
    'I stayed because the thought of her believing I was guilty',
    'of a love I\'d never broken',
    'was the only thing I couldn\'t let be lost.',
  ],
  [
    'I had opened every door to her',
    'not one was ever locked,',
    'I had handed her the whole of me,',
    'the hours and the ache,',
    'the history I carried like a weight',
    'I\'d finally set down for her sake.',
    '',
    'I didn\'t hide a single thing',
    'not the parts I wasn\'t proud of,',
    'not the chapters hard to say',
    'I laid them out because I wanted her',
    'to love the real me,',
    'every shadow, every scar,',
    'every honest, complicated part of me.',
    '',
    'And she did.',
    'For a moment, she did.',
  ],
  [
    'Then the villain came.',
    '',
    'Not loud, not obvious,',
    'not arriving like a storm',
    'but softly, through a message,',
    'through a whisper, through a screen,',
    'wearing the costume of concern',
    'to plant a poison in between.',
    '',
    'And I became the story',
    'that I never wrote myself',
    'a character assembled out of accusations on a shelf,',
    'built from fabrications,',
    'half truths stitched to outright lies,',
    'until the person I loved most',
    'was looking at me with different eyes.',
  ],
  [
    'Do you know what that feels like?',
    '',
    'To stand completely open,',
    'with nothing left to hide,',
    'and watch the one who knows you best',
    'choose the lie over what\'s inside?',
    '',
    'To be the most transparent',
    'you have ever been with anyone',
    'and still be seen as guilty',
    'of a crime you\'ve never done?',
    '',
    'It is a specific kind of breaking.',
    'Quiet. Deep. It doesn\'t make a sound.',
    'It\'s the kind that happens at 2am',
    'when everything is dark and no one\'s around.',
  ],
  [
    'Three months.',
    '',
    'Three months of this has lived inside my chest',
    'three months of waking up and wondering',
    'if today will be the day it ends,',
    'not because of anything I\'ve done',
    'but because of what they said.',
    '',
    'Three months of loving her through glass',
    'so close and yet so unreachable,',
    'three months of being present',
    'while being treated like the threat,',
    'three months of a haunting',
    'I would not wish on anyone',
    '',
    'and yet.',
    '',
    'And yet I\'m still here.',
    'And yet I never left.',
  ],
  [
    'Because here is what the villain',
    'never factored in their plan to break us:',
    '',
    'they could twist my story,',
    'they could poison what we had,',
    'they could take three months of something beautiful',
    'and try to make it sad',
    '',
    'but they could not take',
    'the part of me that loves her.',
    '',
    'That part doesn\'t negotiate.',
    'That part doesn\'t bend.',
    'That part stood in the wreckage',
    'of everything they broke',
    'and said',
    '',
    'not yet.',
    'not her.',
    'not this.',
  ],
  [
    'I am not asking her to forget it.',
    'I am not asking her to pretend',
    'that the last three months were easy',
    'or that nothing needs to mend',
    '',
    'I\'m just asking her to look at me,',
    'really look,',
    'the way she used to when she knew me,',
    'before the noise, before the hurt, before the villain got through,',
    '',
    'and ask herself one question:',
  ],
  [
    'Does this feel like someone guilty?',
    'Or does this feel like someone',
    'who loved her so completely',
    'he survived it all to still be here?',
  ],
  [
    'Because I am still here.',
    '',
    'Bruised, yes.',
    'Quieter than I used to be.',
    'Carrying three months of something',
    'I didn\'t deserve and couldn\'t see coming.',
    '',
    'But here.',
    '',
    'Right where I always was.',
    'Right where I said I\'d be.',
    '',
    'Loving her through the worst of it,',
    'past the lies,',
    'past the damage,',
    'past the villain and their games,',
    'past the nights I almost couldn\'t,',
    'past the weight without a name',
    '',
    'loving her the way I always have',
    '',
    'quietly,',
    'completely,',
    'and without a single thing to hide.',
  ],
];

const PoemSection: React.FC = () => {
  const leftRef   = useScrollReveal<HTMLDivElement>();
  const titleRef  = useScrollReveal<HTMLDivElement>();
  const authorRef = useScrollReveal<HTMLDivElement>();
  const ftrRef    = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="poem">
      <div className={styles.inkStripes} />

      <div className={styles.grid}>

        {/* ══ LEFT — sticky decoration ══ */}
        <div ref={leftRef} className={`${styles.left} sr`}>
          <div className="spd" />

          {/* big floating symbols */}
          <div className={styles.floatSym}
            style={{ fontSize: 'clamp(5rem,12vw,9rem)', top: '5%', left: '8%',
              '--r': '-15deg', animationDuration: '3s',
              color: 'var(--red)', opacity: 0.07 } as React.CSSProperties}>♥</div>
          <div className={styles.floatSym}
            style={{ fontSize: 'clamp(3rem,7vw,5rem)', bottom: '12%', right: '4%',
              '--r': '11deg', animationDuration: '4s', animationDelay: '1s',
              color: 'var(--yellow)', opacity: 0.08 } as React.CSSProperties}>★</div>

          <p className={styles.chapterLabel}>★ CHAPTER 03 ★</p>
          <h2 className={styles.bigTitle}>
            THEY<br /><em>LIED.</em><br />I<br />STAYED.
          </h2>

          {/* thought bubble */}
          <div className={styles.thought}>
            <p>I could have walked away.<br />
            God, there were nights<br />
            I almost did.<br />
            But then I thought of you<br />
            and I stayed.<br />
            I always stayed. ♥</p>
          </div>

          {/* small icon squares */}
          <div className={styles.iconRow}>
            {[
              { bg: 'var(--ink)',   icon: '💔', color: 'var(--red)'    },
              { bg: 'var(--red)',   icon: '★',  color: '#fff'           },
              { bg: 'var(--yellow)',icon: '♥',  color: 'var(--ink)'    },
              { bg: '#fff',         icon: '✦',  color: 'var(--ink)'    },
            ].map((sq, i) => (
              <div key={i} className={styles.iconSq}
                style={{ background: sq.bg, color: sq.color }}>
                {sq.icon}
              </div>
            ))}
          </div>

          {/* torn paper note pinned to left */}
          <div className={styles.pinnedNote}>
            <div className={styles.pin} />
            <p>"3 months of pain.<br />0 lies told.<br />Still here."</p>
          </div>
        </div>

        {/* ══ RIGHT — poem page ══ */}
        <div className={styles.right}>
          <div className="ht-y" />

          {/* page header */}
          <div ref={titleRef} className={`${styles.poemHdr} sr`}>
            <div className={styles.hdrLine} />
            <h3 className={styles.poemTitle}>They Lied. I Stayed.</h3>
            <div className={styles.hdrLine} />
          </div>

          <div ref={authorRef} className={`${styles.poemAuthor} sr`}>
            — by the one who never left
          </div>

          {/* rendered poem stanzas */}
          <div className={styles.poemBody}>
            {POEM_STANZAS.map((lines, i) => (
              <React.Fragment key={i}>
                <Stanza lines={lines} delay={i * 60} />
                {/* dramatic single lines at key moments */}
                {i === 4 && <DramaticLine text="Then the villain came." />}
                {i === 9 && <DramaticLine text="Does this feel like someone guilty?" />}
                {i === 10 && (
                  <div className={styles.finalAnswer}>
                    <span>Or does this feel like someone</span>
                    <strong>who loved her so completely</strong>
                    <strong>he survived it all to still be here?</strong>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* closing lines — big emotional finish */}
            <div className={styles.closingWrap}>
              <p className={styles.closingLine}>They lied.</p>
              <p className={styles.closingLine}>I stayed.</p>
              <p className={styles.closingLineSub}>That is the whole story.</p>
              <p className={styles.closingHeart}>💛</p>
            </div>
          </div>

          {/* footer */}
          <div ref={ftrRef} className={`${styles.footer} sr`}>
            <div className={styles.signature}>— the one they tried to erase, but couldn't ♥</div>
            <div className={styles.footerRight}>
              <div className={styles.pageNum}>pg. 03</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoemSection;
