import {
  ArrowLeft,
  ArrowRight,
  Expand,
  Heart,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  centerHeartPortrait,
  heartCollagePhotos,
  type HeartPhoto,
} from "@/lib/birthday-content";

type HeartSlot = {
  x: number;
  y: number;
  z: number;
  startX: number;
  startY: number;
  startRot: number;
};

// 30 bilaterally symmetric coordinates forming a 3D heart sculpture framing the central portrait
const LEFT_HEART_HALF: Array<[number, number]> = [
  // Outer heart boundary (9)
  [40.4, 11.8],
  [29.8, 7.2],
  [18.8, 10.6],
  [9.6, 20.6],
  [7.0, 33.4],
  [10.8, 46.8],
  [18.0, 59.6],
  [27.4, 71.8],
  [38.2, 83.2],
  // Inner sculpted halo framing the raised center portrait (5)
  [28.6, 21.8],
  [18.8, 32.8],
  [28.8, 34.4],
  [28.8, 47.2],
  [37.4, 69.8],
];

const RAW_HEART_POINTS: Array<[number, number]> = [
  [50.0, 19.6], // top cleft dip
  [50.0, 93.4], // bottom tip
  ...LEFT_HEART_HALF,
  ...LEFT_HEART_HALF.map(([x, y]): [number, number] => [Number((100 - x).toFixed(2)), y]),
];

const HEART_SLOTS: HeartSlot[] = RAW_HEART_POINTS.map(([x, y], index) => {
  const dx = x - 50;
  const dy = y - 44.5;
  const distance = Math.hypot(dx, dy) || 1;
  const push = 165 + (index % 5) * 26;
  // Sculpted 3D depth: inner photos swell slightly forward, outer rim curves gently back
  const z = Math.round(Math.max(8, 34 - distance * 0.45));
  return {
    x,
    y,
    z,
    startX: Math.round((dx / distance) * push * 0.45),
    startY: Math.round((dy / distance) * push * 0.45 - 24),
    startRot: (index % 2 === 0 ? -1 : 1) * (10 + (index % 4) * 5),
  };
});

const FLOATING_PARTICLES = [
  { id: 1, kind: "heart", char: "♡", left: "6%", top: "14%", delay: "0s" },
  { id: 2, kind: "spark", char: "✦", left: "13%", top: "74%", delay: "0.9s" },
  { id: 3, kind: "heart", char: "♥", left: "89%", top: "16%", delay: "1.4s" },
  { id: 4, kind: "spark", char: "✧", left: "92%", top: "68%", delay: "0.4s" },
  { id: 5, kind: "heart", char: "♡", left: "18%", top: "88%", delay: "1.9s" },
  { id: 6, kind: "spark", char: "✦", left: "82%", top: "86%", delay: "1.1s" },
  { id: 7, kind: "dot", char: "", left: "9%", top: "45%", delay: "0.6s" },
  { id: 8, kind: "dot", char: "", left: "91%", top: "42%", delay: "1.6s" },
  { id: 9, kind: "spark", char: "✧", left: "50%", top: "9%", delay: "2.1s" },
  { id: 10, kind: "dot", char: "", left: "28%", top: "6%", delay: "1.2s" },
  { id: 11, kind: "dot", char: "", left: "72%", top: "6%", delay: "0.3s" },
  { id: 12, kind: "heart", char: "♡", left: "4%", top: "62%", delay: "2.4s" },
];

const CENTER_SPARKLES = [
  { id: "c1", char: "✦", className: "heart-center-spark heart-center-spark--1" },
  { id: "c2", char: "✧", className: "heart-center-spark heart-center-spark--2" },
  { id: "c3", char: "♡", className: "heart-center-spark heart-center-spark--3" },
  { id: "c4", char: "✦", className: "heart-center-spark heart-center-spark--4" },
  { id: "c5", char: "✧", className: "heart-center-spark heart-center-spark--5" },
  { id: "c6", char: "♡", className: "heart-center-spark heart-center-spark--6" },
];

type RevealPhase = "dark" | "revealing" | "complete";

const STAGGER_MS = 54;
const TILE_DURATION_MS = 680;
const COMPLETE_AT_MS = heartCollagePhotos.length * STAGGER_MS + TILE_DURATION_MS;

export function HeartCollage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [phase, setPhase] = useState<RevealPhase>("dark");
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tilt3d, setTilt3d] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });
  const touchStartX = useRef<number | null>(null);
  const thumbListRef = useRef<HTMLDivElement | null>(null);
  const completeTimerRef = useRef<number | undefined>(undefined);

  // Fullscreen gallery holds the special center portrait first, then all unique regular heart photos
  const galleryPhotos = useMemo(
    () => [centerHeartPortrait, ...heartCollagePhotos],
    [],
  );

  const startReveal = () => {
    window.clearTimeout(completeTimerRef.current);
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setPhase("complete");
      return;
    }

    setPhase("revealing");
    completeTimerRef.current = window.setTimeout(() => {
      setPhase("complete");
    }, COMPLETE_AT_MS);
  };

  const replayReveal = () => {
    window.clearTimeout(completeTimerRef.current);
    setPhase("dark");
    window.requestAnimationFrame(() => {
      window.setTimeout(() => {
        startReveal();
      }, 220);
    });
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      startReveal();
      return () => window.clearTimeout(completeTimerRef.current);
    }

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!triggered && entries.some((entry) => entry.isIntersecting)) {
          triggered = true;
          startReveal();
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(completeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (galleryIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setGalleryIndex(null);
      } else if (event.key === "ArrowRight") {
        setGalleryIndex((current) =>
          current === null ? null : (current + 1) % galleryPhotos.length,
        );
      } else if (event.key === "ArrowLeft") {
        setGalleryIndex((current) =>
          current === null
            ? null
            : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryIndex, galleryPhotos.length]);

  useEffect(() => {
    if (galleryIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const activeThumb = thumbListRef.current?.querySelector<HTMLButtonElement>(
      `[data-thumb-index="${galleryIndex}"]`,
    );
    activeThumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [galleryIndex]);

  const handleStagePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt3d({
      rx: Number((-ny * 8).toFixed(2)),
      ry: Number((nx * 10).toFixed(2)),
    });
  };

  const resetTilt3d = () => setTilt3d({ rx: 0, ry: 0 });

  const stepGallery = (direction: number) => {
    setGalleryIndex((current) =>
      current === null
        ? null
        : (current + direction + galleryPhotos.length) % galleryPhotos.length,
    );
  };

  const activePhoto: HeartPhoto | null =
    galleryIndex === null ? null : (galleryPhotos[galleryIndex] ?? null);
  const isCenterActive = galleryIndex === 0;

  return (
    <section
      ref={sectionRef}
      className="heart-collage-section page-section"
      id="heart-collage"
      aria-label="3D heart-shaped photo collage of Yuku"
    >
      <div className="section-topline">
        <span>01 / her heart</span>
        <span>
          for my yuku <Heart size={12} fill="currentColor" />
        </span>
      </div>

      <div className="heart-collage__header">
        <span className="eyebrow">
          <span className="eyebrow__line" />
          Every frame, one heartbeat
        </span>
        <h2 className="heart-collage__title">
          A Heart Made of <em>You</em>
        </h2>
        <p className="heart-collage__intro">
          At the center of every memory sits my favourite one. Click anywhere to step inside in fullscreen.
        </p>
      </div>

      <div
        className={`heart-stage heart-stage--${phase}`}
        onPointerMove={handleStagePointerMove}
        onPointerLeave={resetTilt3d}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setGalleryIndex(0);
          }
        }}
      >
        <div className="heart-stage__glow" aria-hidden="true" />
        <svg
          className="heart-stage__silhouette"
          viewBox="0 0 100 96"
          aria-hidden="true"
          onClick={() => setGalleryIndex(0)}
        >
          <path d="M50 90 C32 76 9 57 9 32 C9 16 21 7 34 7 C42 7 47 12 50 18 C53 12 58 7 66 7 C79 7 91 16 91 32 C91 57 68 76 50 90 Z" />
        </svg>

        <div className="heart-particles" aria-hidden="true">
          {FLOATING_PARTICLES.map((particle) => (
            <span
              key={particle.id}
              className={`heart-particle heart-particle--${particle.kind}`}
              style={
                {
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                } as React.CSSProperties
              }
            >
              {particle.char}
            </span>
          ))}
        </div>

        <div
          className="heart-sculpture-3d"
          style={
            {
              "--rx": `${tilt3d.rx}deg`,
              "--ry": `${tilt3d.ry}deg`,
            } as React.CSSProperties
          }
        >
          <div
            className="heart-mosaic"
            role="group"
            aria-label="Heart sculpture of Yuku photographs with special center portrait"
          >
            {heartCollagePhotos.map((photo, index) => {
              const slot = HEART_SLOTS[index]!;
              const isHovered = hoveredId === photo.id;
              return (
                <button
                  key={photo.id}
                  type="button"
                  className={`heart-tile${isHovered ? " heart-tile--hovered" : ""}`}
                  style={
                    {
                      left: `${slot.x}%`,
                      top: `${slot.y}%`,
                      "--z": `${slot.z}px`,
                      "--delay": `${index * STAGGER_MS}ms`,
                      "--rot": `${photo.tilt}deg`,
                      "--start-x": `${slot.startX}px`,
                      "--start-y": `${slot.startY}px`,
                      "--start-rot": `${slot.startRot}deg`,
                    } as React.CSSProperties
                  }
                  onMouseEnter={() => setHoveredId(photo.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onFocus={() => setHoveredId(photo.id)}
                  onBlur={() => setHoveredId(null)}
                  onClick={(event) => {
                    event.stopPropagation();
                    setGalleryIndex(index + 1);
                  }}
                  aria-label={`Open photo ${index + 1}: ${photo.title}`}
                >
                  <span className="heart-tile__inner">
                    <img
                      src={photo.src}
                      alt={`${photo.title} — Yuku`}
                      loading="eager"
                      decoding="async"
                      style={{ objectPosition: photo.focalPoint ?? "50% 25%" }}
                    />
                  </span>
                </button>
              );
            })}

            <div className="heart-centerpiece-wrap">
              <span className="heart-centerpiece-halo" aria-hidden="true" />
              <span className="heart-center-sparkles" aria-hidden="true">
                {CENTER_SPARKLES.map((sparkle) => (
                  <span key={sparkle.id} className={sparkle.className}>
                    {sparkle.char}
                  </span>
                ))}
              </span>
              <button
                type="button"
                className="heart-centerpiece"
                onClick={(event) => {
                  event.stopPropagation();
                  setGalleryIndex(0);
                }}
                aria-label={`Open main centerpiece portrait: ${centerHeartPortrait.title}`}
              >
                <span className="heart-centerpiece__gold-bezel">
                  <span className="heart-centerpiece__mat">
                    <span className="heart-centerpiece__inner">
                      <img
                        src={centerHeartPortrait.src}
                        alt={`${centerHeartPortrait.title} — Special Portrait`}
                        loading="eager"
                        decoding="async"
                        style={{ objectPosition: centerHeartPortrait.focalPoint ?? "50% 42%" }}
                      />
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="heart-caption">
        Among 40 beautiful memories, you will always be my favourite. ❤️
      </p>

      <div className="heart-actions">
        <Button className="heart-action-primary" onClick={() => setGalleryIndex(0)}>
          <Expand size={15} /> Open Fullscreen Gallery
        </Button>
        <Button variant="outline" className="heart-action-secondary" onClick={replayReveal}>
          <RotateCcw size={14} /> Replay Reveal
        </Button>
      </div>

      {activePhoto ? (
        <div
          className="heart-gallery"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo gallery: ${activePhoto.title}`}
          onClick={() => setGalleryIndex(null)}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
            const delta = endX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(delta) > 45) {
              stepGallery(delta < 0 ? 1 : -1);
            }
          }}
        >
          <div className="heart-gallery__topbar" onClick={(event) => event.stopPropagation()}>
            <span className="heart-gallery__brand">
              <Sparkles size={14} />{" "}
              {isCenterActive ? "Main Heart Portrait" : "Yuku's Gallery"}
            </span>
            <span className="heart-gallery__counter">
              {String((galleryIndex ?? 0) + 1).padStart(2, "0")} <span>/</span>{" "}
              {String(galleryPhotos.length).padStart(2, "0")}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="heart-gallery__close"
              aria-label="Close fullscreen gallery"
              onClick={() => setGalleryIndex(null)}
            >
              <X size={20} />
            </Button>
          </div>

          <div className="heart-gallery__stage" onClick={(event) => event.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="heart-gallery__nav heart-gallery__nav--prev"
              aria-label="Previous photograph"
              onClick={() => stepGallery(-1)}
            >
              <ArrowLeft size={20} />
            </Button>

            <figure key={activePhoto.id} className="heart-gallery__figure">
              <div
                className={`heart-gallery__frame${isCenterActive ? " heart-gallery__frame--gold" : ""}`}
              >
                <img
                  src={activePhoto.src}
                  alt={`${activePhoto.title} — Yuku`}
                  className="heart-gallery__img"
                />
              </div>
              <figcaption className="heart-gallery__meta">
                <h3>{activePhoto.title}</h3>
                <p>{activePhoto.caption}</p>
              </figcaption>
            </figure>

            <Button
              variant="ghost"
              size="icon"
              className="heart-gallery__nav heart-gallery__nav--next"
              aria-label="Next photograph"
              onClick={() => stepGallery(1)}
            >
              <ArrowRight size={20} />
            </Button>
          </div>

          <div
            ref={thumbListRef}
            className="heart-gallery__thumbs"
            onClick={(event) => event.stopPropagation()}
            aria-label="Choose a photo"
          >
            {galleryPhotos.map((photo, index) => {
              const selected = index === galleryIndex;
              const isGoldThumb = index === 0;
              return (
                <button
                  key={photo.id}
                  type="button"
                  data-thumb-index={index}
                  className={`heart-gallery__thumb${isGoldThumb ? " heart-gallery__thumb--gold" : ""}${selected ? " heart-gallery__thumb--active" : ""}`}
                  onClick={() => setGalleryIndex(index)}
                  aria-label={`View photo ${index + 1}: ${photo.title}`}
                  aria-current={selected ? "true" : undefined}
                >
                  <img
                    src={photo.src}
                    alt=""
                    loading="lazy"
                    style={{ objectPosition: photo.focalPoint ?? "50% 25%" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </section>
  );
}
