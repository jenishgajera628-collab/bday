import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  AudioLines,
  CakeSlice,
  Eye,
  Flame,
  Flower2,
  Gift,
  Heart,
  Laugh,
  Mail,
  Menu,
  Music2,
  Pause,
  Play,
  Smile,
  Sparkles,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  birthdayLetter,
  birthdaySong,
  ENABLE_COUNTDOWN_LOCK,
  galleryMemories,
  getBirthdayUnlockTimestamp,
  getCountdownParts,
  heroMemory,
  specialReasons,
  storyTimeline,
  thingsToAdore,
  type PhotoMemory,
} from "@/lib/birthday-content";

const navItems = [
  { label: "Memories", href: "#memories" },
  { label: "Our story", href: "#story" },
  { label: "Little things", href: "#adore" },
  { label: "The letter", href: "#letter" },
];

const adorationIcons: Record<string, LucideIcon> = {
  smile: Smile,
  eye: Eye,
  sparkles: Sparkles,
  flame: Flame,
  flower: Flower2,
  laugh: Laugh,
  heart: Heart,
  star: Star,
};

const decorativeHearts = ["heart-float--one", "heart-float--two", "heart-float--three"];
const SONG_START_SECONDS = 10;
const fallbackMemory: PhotoMemory = {
  id: 0,
  title: "A little place for us",
  caption: "A moment worth keeping",
  note: "[Add a real memory here.]",
  artClass: "memory-art--one",
  image: null,
};

const getGalleryMemory = (index: number) => galleryMemories[index] ?? galleryMemories[0] ?? fallbackMemory;

function MemoryArtwork({ memory, label }: { memory: PhotoMemory; label?: string }) {
  return (
    <div
      className={`memory-art ${memory.artClass}`}
      role={memory.image ? undefined : "img"}
      aria-label={memory.image ? undefined : (label ?? `Photo placeholder for ${memory.title}`)}
    >
      {memory.image ? (
        <img className="memory-art__photo" src={memory.image} alt={label ?? memory.title} />
      ) : (
        <>
          <span className="memory-art__moon" aria-hidden="true" />
          <span className="memory-art__horizon" aria-hidden="true" />
          <span className="memory-art__silhouette memory-art__silhouette--one" aria-hidden="true" />
          <span className="memory-art__silhouette memory-art__silhouette--two" aria-hidden="true" />
          <span className="memory-art__grain" aria-hidden="true" />
          <span className="memory-art__label">A place for your photo</span>
        </>
      )}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  note,
  light = false,
}: {
  eyebrow: string;
  title: string;
  note?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading story-reveal${light ? " section-heading--light" : ""}`}>
      <span className="eyebrow"><span className="eyebrow__line" />{eyebrow}</span>
      <h2>{title}</h2>
      {note ? <p>{note}</p> : null}
    </div>
  );
}

export function OurLittleUniverse() {
  const [now, setNow] = useState<number | null>(null);
  const [unlockTimestamp, setUnlockTimestamp] = useState<number | null>(null);

  useEffect(() => {
    if (!ENABLE_COUNTDOWN_LOCK) return;
    const target = getBirthdayUnlockTimestamp();
    setUnlockTimestamp(target);
    setNow(Date.now());

    const timer = window.setInterval(() => {
      const current = Date.now();
      setNow(current);
      if (current >= target) {
        window.clearInterval(timer);
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, []);

  if (!ENABLE_COUNTDOWN_LOCK) {
    return <UnlockedLittleUniverse />;
  }

  if (now === null || unlockTimestamp === null) {
    return (
      <main className="universe-shell">
        <div className="ambient-stars" aria-hidden="true" />
        <section className="countdown-screen" aria-label="Birthday countdown">
          <div className="opening-screen__stars" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => (
              <i key={index} className={`opening-star opening-star--${(index % 6) + 1}`} />
            ))}
          </div>
          <div className="countdown-content">
            <span className="opening-kicker"><Sparkles size={14} /> a little surprise is waiting</span>
            <h1 className="countdown-title">Counting Down to<br /><em>Your Special Day</em></h1>
            <p className="countdown-subtitle">This little universe opens at 12:00 AM on January 6, 2027.</p>
            <div className="countdown-grid" aria-live="polite">
              {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                <div className="countdown-unit" key={label}>
                  <span className="countdown-unit__value">--</span>
                  <span className="countdown-unit__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="opening-signature">waiting for midnight, 6 january 2027 ♡</span>
        </section>
      </main>
    );
  }

  const countdown = getCountdownParts(unlockTimestamp, now);
  if (countdown.totalMs > 0) {
    const units = [
      { label: "Days", value: String(countdown.days).padStart(2, "0") },
      { label: "Hours", value: String(countdown.hours).padStart(2, "0") },
      { label: "Minutes", value: String(countdown.minutes).padStart(2, "0") },
      { label: "Seconds", value: String(countdown.seconds).padStart(2, "0") },
    ];

    return (
      <main className="universe-shell">
        <div className="ambient-stars" aria-hidden="true" />
        <div className="floating-hearts" aria-hidden="true">
          {decorativeHearts.map((className) => <span key={className} className={className}>♡</span>)}
        </div>
        <section className="countdown-screen" aria-label="Birthday countdown">
          <div className="opening-screen__stars" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => (
              <i key={index} className={`opening-star opening-star--${(index % 6) + 1}`} />
            ))}
          </div>
          <div className="countdown-content">
            <span className="opening-kicker"><Sparkles size={14} /> a little surprise is waiting</span>
            <h1 className="countdown-title">Counting Down to<br /><em>Your Special Day</em></h1>
            <p className="countdown-subtitle">This little universe opens right when the clock strikes midnight on January 6, 2027.</p>
            <div className="countdown-grid" role="timer" aria-live="polite" aria-label="Time remaining until January 6, 2027">
              {units.map((unit) => (
                <div className="countdown-unit" key={unit.label}>
                  <span className="countdown-unit__value">{unit.value}</span>
                  <span className="countdown-unit__label">{unit.label}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="opening-signature">made with love, just for Yuku ♡</span>
        </section>
      </main>
    );
  }

  return <UnlockedLittleUniverse />;
}

function UnlockedLittleUniverse() {
  const [opening, setOpening] = useState(true);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [lovedItems, setLovedItems] = useState<number[]>([]);
  const [openReason, setOpenReason] = useState<number | null>(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [hugOpen, setHugOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const closeOpeningTimer = useRef<number | undefined>(undefined);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const selectedMemory = selectedPhoto === null ? null : galleryMemories[selectedPhoto];

  useEffect(() => {
    if (opening) return;

    const targets = document.querySelectorAll<HTMLElement>(".story-reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [opening]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
        setHugOpen(false);
      }
      if (selectedPhoto !== null && event.key === "ArrowRight") {
        setSelectedPhoto((current) => current === null ? null : (current + 1) % galleryMemories.length);
      }
      if (selectedPhoto !== null && event.key === "ArrowLeft") {
        setSelectedPhoto((current) => current === null ? null : (current - 1 + galleryMemories.length) % galleryMemories.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  useEffect(() => () => window.clearTimeout(closeOpeningTimer.current), []);

  const startAudio = (audio: HTMLAudioElement, restart = false) => {
    if (audio.readyState >= 1 && (restart || audio.currentTime < SONG_START_SECONDS)) {
      audio.currentTime = SONG_START_SECONDS;
    }
    const playPromise = audio.play();
    if (playPromise) {
      playPromise
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false));
    } else {
      setMusicPlaying(true);
    }
  };

  const openBirthday = () => {
    setEnvelopeOpen(true);
    const audio = audioRef.current;
    if (audio) {
      startAudio(audio, true);
    }
    closeOpeningTimer.current = window.setTimeout(() => {
      setOpening(false);
      setWelcomeVisible(true);
      window.setTimeout(() => setWelcomeVisible(false), 4600);
    }, 800);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      startAudio(audio);
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLoved = (index: number) => {
    setLovedItems((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  };

  const stepPhoto = (direction: number) => {
    setSelectedPhoto((current) => current === null
      ? null
      : (current + direction + galleryMemories.length) % galleryMemories.length);
  };

  return (
    <main className="universe-shell">
      <div className="ambient-stars" aria-hidden="true" />
      <div className="floating-hearts" aria-hidden="true">
        {decorativeHearts.map((className) => <span key={className} className={className}>♡</span>)}
      </div>

      {opening ? (
        <section className={`opening-screen${envelopeOpen ? " opening-screen--leaving" : ""}`} aria-label="Birthday surprise">
          <div className="opening-screen__stars" aria-hidden="true">
            {Array.from({ length: 18 }, (_, index) => <i key={index} className={`opening-star opening-star--${index % 6 + 1}`} />)}
          </div>
          <span className="opening-kicker"><Sparkles size={14} /> a little universe, just for you</span>
          <p className="opening-intro">A little world, made just for you...</p>
          <div className={`birthday-envelope${envelopeOpen ? " birthday-envelope--open" : ""}`} aria-hidden="true">
            <div className="birthday-envelope__letter"><Heart size={24} fill="currentColor" /></div>
            <div className="birthday-envelope__back" />
            <div className="birthday-envelope__flap" />
            <div className="birthday-envelope__front" />
            <div className="birthday-envelope__seal"><Heart size={20} fill="currentColor" /></div>
          </div>
          <Button className="surprise-button" onClick={openBirthday} disabled={envelopeOpen}>
            Open Your Surprise <Heart size={17} fill="currentColor" />
          </Button>
        </section>
      ) : null}

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Our Little Universe home">
          <span className="wordmark__star"><Star size={16} fill="currentColor" /></span>
          <span>our little <em>universe</em></span>
        </a>
        <nav className={`site-nav${mobileNavOpen ? " site-nav--open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)}>{item.label}</a>
          ))}
          <Button variant="outline" className="nav-letter-button" onClick={() => scrollTo("letter")}>
            <Mail size={14} /> A letter for you
          </Button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((value) => !value)}
        >
          {mobileNavOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-section__copy">
          <span className="eyebrow"><span className="eyebrow__line" />A universe of us</span>
          <h1>To My Favourite<br /><em>Person, Yuku</em> <Heart className="hero-heart" size={42} fill="currentColor" /></h1>
          <p className="hero-subtitle">Every beautiful memory of mine has a little piece of you.</p>
          <div className="hero-signature"><span />Happy Birthday, My Princess!<Heart size={14} fill="currentColor" /></div>
          <Button variant="ghost" className="hero-link" onClick={() => scrollTo("memories")}>
            Wander through our memories <ArrowDown size={15} />
          </Button>
        </div>
        <div className="hero-art-wrap story-reveal">
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <span className="hero-art-spark hero-art-spark--one" aria-hidden="true">✦</span>
          <span className="hero-art-spark hero-art-spark--two" aria-hidden="true">✧</span>
          <div className="hero-polaroid">
            <MemoryArtwork memory={heroMemory} label="A childhood photo of Yuku" />
          </div>
          <span className="hero-note hero-note--top">the best part<br />of every day</span>
          <span className="hero-note hero-note--bottom">our little<br />universe</span>
        </div>
        <a className="scroll-cue" href="#memories" aria-label="Scroll to memories"><span>keep exploring</span><ArrowDown size={15} /></a>
      </section>

      <section className="memory-section page-section" id="memories">
        <div className="section-topline"><span>01 / little moments</span><span>collected with love <Heart size={12} fill="currentColor" /></span></div>
        <SectionHeading eyebrow="The scrapbook" title="Every Picture Holds a Little Story" note="A little gallery of moments — and all the spaces waiting for yours." />
        <div className="memory-grid">
          {galleryMemories.map((memory, index) => (
            <Button
              key={memory.id}
              variant="ghost"
              className={`polaroid-card polaroid-card--${index + 1} story-reveal`}
              onClick={() => setSelectedPhoto(index)}
              aria-label={`Open photo: ${memory.title}`}
            >
              <MemoryArtwork memory={memory} />
              <span className="polaroid-card__caption">{memory.title}</span>
              <span className="polaroid-card__note">{memory.caption} <Heart size={12} /></span>
            </Button>
          ))}
        </div>
        <div className="gallery-footnote story-reveal"><span className="tiny-star">✳</span> Eight little windows into your story. <span className="tiny-star">✳</span></div>
      </section>

      <section className="story-section page-section" id="story">
        <div className="section-topline"><span>02 / then, now & always</span><span>our timeline <Heart size={12} fill="currentColor" /></span></div>
        <SectionHeading eyebrow="The chapters of us" title="Our Journey, Our Story" note="Seven little chapters, ready for the details only you two know." />
        <div className="timeline">
          <div className="timeline__line" aria-hidden="true" />
          {storyTimeline.map((story, index) => (
            <article className={`timeline-entry story-reveal${index % 2 ? " timeline-entry--reverse" : ""}`} key={story.id}>
              <div className="timeline-entry__marker"><span>{String(story.id).padStart(2, "0")}</span></div>
              <div className="timeline-entry__visual">
                <MemoryArtwork memory={{ ...getGalleryMemory((index + 1) % galleryMemories.length), artClass: story.artClass, title: story.title }} />
                <span className="timeline-entry__date">{story.date}</span>
              </div>
              <div className="timeline-entry__copy">
                <span className="eyebrow"><span className="eyebrow__line" />Chapter {String(story.id).padStart(2, "0")}</span>
                <h3>{story.title}</h3>
                <p>{story.note}</p>
                <span className="timeline-entry__heart"><Heart size={15} fill="currentColor" /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="adore-section page-section" id="adore">
        <div className="section-topline"><span>03 / the little things</span><span>my favorite list <Heart size={12} fill="currentColor" /></span></div>
        <SectionHeading eyebrow="A list I could never finish" title="Little Things I Adore About You" note="Tap the ones that feel like a little hug." />
        <div className="adore-grid">
          {thingsToAdore.map((item, index) => {
            const Icon = adorationIcons[item.icon] ?? Heart;
            const loved = lovedItems.includes(index);
            return (
              <Button
                key={item.title}
                variant="ghost"
                className={`adore-card adore-card--${index + 1}${loved ? " adore-card--loved" : ""}`}
                aria-pressed={loved}
                onClick={() => toggleLoved(index)}
              >
                <span className="adore-card__icon"><Icon size={21} strokeWidth={1.55} /></span>
                <span className="adore-card__title">{item.title}</span>
                <span className="adore-card__hint">{loved ? "always & always" : "♡"}</span>
              </Button>
            );
          })}
        </div>
        <p className="adore-signoff story-reveal">And somehow, that’s still only the beginning. <Heart size={15} fill="currentColor" /></p>
      </section>

      <section className="reasons-section page-section" id="reasons">
        <div className="section-topline"><span>04 / little love notes</span><span>open one <Heart size={12} fill="currentColor" /></span></div>
        <SectionHeading eyebrow="Whenever you need a smile" title="Reasons Why You Are Special" note="A few tiny envelopes, each holding words you can make your own." />
        <div className="reason-grid">
          {specialReasons.map((reason, index) => {
            const isOpen = openReason === index;
            return (
              <Button
                key={reason.title}
                variant="ghost"
                className={`reason-envelope${isOpen ? " reason-envelope--open" : ""}`}
                aria-expanded={isOpen}
                onClick={() => setOpenReason(isOpen ? null : index)}
              >
                <span className="reason-envelope__icon"><Gift size={22} /></span>
                <span className="reason-envelope__title">{reason.title}</span>
                <span className="reason-envelope__content">{isOpen ? reason.message : "A little note for you"}</span>
                <span className="reason-envelope__seal"><Heart size={14} fill="currentColor" /></span>
                <span className="reason-envelope__action">{isOpen ? "close note" : "open note"}</span>
              </Button>
            );
          })}
        </div>
      </section>

      <section className="letter-section page-section" id="letter">
        <div className="section-topline"><span>05 / just for you</span><span>read slowly <Heart size={12} fill="currentColor" /></span></div>
        <div className="letter-layout">
          <div className="letter-intro story-reveal">
            <span className="eyebrow"><span className="eyebrow__line" />A keepsake for your birthday</span>
            <h2>A Letter<br /><em>From My Heart</em> <span className="letter-emoji">♡</span></h2>
            <p>Some things are sweeter when they’re written down.</p>
            <Button variant="outline" className="letter-toggle" onClick={() => setLetterOpen((value) => !value)}>
              <Mail size={15} /> {letterOpen ? "Fold the letter" : "Open your letter"}
            </Button>
          </div>
          <div className={`letter-paper${letterOpen ? " letter-paper--open" : ""}`}>
            <div className="letter-paper__top"><span>for my dearest</span><Heart size={15} fill="currentColor" /></div>
            <div className="letter-paper__body" tabIndex={letterOpen ? 0 : -1} aria-label="Birthday letter">
              {birthdayLetter.split("\n\n").map((paragraph, index) => (
                <p className={index === 0 ? "letter-paper__salutation" : ""} key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="letter-paper__signature">always yours <span>♡</span></div>
            <span className="letter-paper__stamp" aria-hidden="true">Y</span>
          </div>
        </div>
      </section>

      <section className="birthday-finale page-section" id="birthday">
        <span className="finale-spark finale-spark--one" aria-hidden="true">✦</span>
        <span className="finale-spark finale-spark--two" aria-hidden="true">✧</span>
        <span className="finale-balloon finale-balloon--one" aria-hidden="true" />
        <span className="finale-balloon finale-balloon--two" aria-hidden="true" />
        <div className="finale-copy story-reveal">
          <span className="eyebrow"><span className="eyebrow__line" />The very best day</span>
          <h2>Happy Birthday,<br /><em>My Princess</em> <Heart size={34} fill="currentColor" /></h2>
          <p>If I could choose my favourite person in every lifetime,<br className="desktop-break" /> I would still choose you.</p>
          <Button className="hug-button" onClick={() => setHugOpen(true)}>
            One More Hug? <Heart size={17} fill="currentColor" />
          </Button>
        </div>
        <div className="birthday-cake story-reveal" aria-label="A birthday cake with glowing candles">
          <span className="cake-spark cake-spark--one" aria-hidden="true">✦</span>
          <span className="cake-spark cake-spark--two" aria-hidden="true">✧</span>
          <div className="cake-candles"><span /><span /><span /></div>
          <div className="cake-top" />
          <div className="cake-layer cake-layer--top" />
          <div className="cake-layer cake-layer--bottom" />
          <div className="cake-plate" />
          <span className="cake-heart"><Heart size={21} fill="currentColor" /></span>
        </div>
        <div className="finale-footer"><span>made with all my love</span><Heart size={12} fill="currentColor" /><span>for Yuku</span></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#home"><span className="wordmark__star"><Star size={14} fill="currentColor" /></span><span>our little <em>universe</em></span></a>
        <span>Every universe feels a little brighter with you in it.</span>
        <a href="#home" aria-label="Back to the beginning">back to the beginning ↑</a>
      </footer>

      <div className="music-player" aria-label="Birthday music player">
        <div className="music-player__disc"><Music2 size={17} /></div>
        <div className="music-player__text"><span>A song for you</span><small>our little soundtrack</small></div>
        <div className={`music-visualizer${musicPlaying ? " music-visualizer--playing" : ""}`} aria-hidden="true"><i /><i /><i /><i /></div>
        <Button
          variant="ghost"
          size="icon"
          className="music-player__button"
          aria-label={musicPlaying ? "Pause the birthday song" : "Play the birthday song"}
          aria-pressed={musicPlaying}
          onClick={toggleMusic}
        >
          {musicPlaying ? <Pause size={17} /> : <Play size={17} />}
        </Button>
        <audio
          ref={audioRef}
          src={`${birthdaySong}#t=${SONG_START_SECONDS}`}
          preload="auto"
          onLoadedMetadata={(event) => {
            const audio = event.currentTarget;
            if (audio.currentTime < SONG_START_SECONDS) {
              audio.currentTime = SONG_START_SECONDS;
            }
          }}
          onPlay={(event) => {
            const audio = event.currentTarget;
            if (audio.currentTime < SONG_START_SECONDS) {
              audio.currentTime = SONG_START_SECONDS;
            }
            setMusicPlaying(true);
          }}
          onPause={() => setMusicPlaying(false)}
          onEnded={(event) => {
            startAudio(event.currentTarget, true);
          }}
        />
      </div>

      {welcomeVisible ? (
        <div className="welcome-toast" role="status"><Sparkles size={15} /> Happy Birthday, My Princess! <Heart size={14} fill="currentColor" /></div>
      ) : null}

      {selectedMemory ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedMemory.title} onClick={() => setSelectedPhoto(null)}>
          <Button variant="ghost" size="icon" className="lightbox__close" aria-label="Close photo" onClick={() => setSelectedPhoto(null)}><X /></Button>
          <Button variant="ghost" size="icon" className="lightbox__previous" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); stepPhoto(-1); }}><ArrowLeft /></Button>
          <div className="lightbox__content" onClick={(event) => event.stopPropagation()}>
            <div className="lightbox__photo"><MemoryArtwork memory={selectedMemory} /></div>
            <span className="eyebrow"><span className="eyebrow__line" />A little memory</span>
            <h2>{selectedMemory.title}</h2>
            <p className="lightbox__caption">{selectedMemory.caption}</p>
            <p>{selectedMemory.note}</p>
            <span className="lightbox__counter">{String((selectedPhoto ?? 0) + 1).padStart(2, "0")} <span>/</span> {String(galleryMemories.length).padStart(2, "0")}</span>
          </div>
          <Button variant="ghost" size="icon" className="lightbox__next" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); stepPhoto(1); }}><ArrowRight /></Button>
        </div>
      ) : null}

      {hugOpen ? (
        <div className="hug-overlay" role="dialog" aria-modal="true" aria-label="One more hug" onClick={() => setHugOpen(false)}>
          <Button variant="ghost" size="icon" className="hug-overlay__close" aria-label="Close hug surprise" onClick={() => setHugOpen(false)}><X /></Button>
          <div className="hug-heart-field" aria-hidden="true">{Array.from({ length: 22 }, (_, index) => <span key={index} className={`hug-heart hug-heart--${index % 7 + 1}`}>♡</span>)}</div>
          <div className="hug-message" onClick={(event) => event.stopPropagation()}>
            <span className="hug-message__heart"><Heart size={45} fill="currentColor" /></span>
            <p>All the hugs in the universe,</p>
            <h2>just for you, Yuku.</h2>
            <span>happy birthday, my favorite person <Heart size={13} fill="currentColor" /></span>
          </div>
        </div>
      ) : null}

      <span className="sr-only"><CakeSlice /><AudioLines /></span>
    </main>
  );
}