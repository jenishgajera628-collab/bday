export function HuggingBearsCartoon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Floating mini hearts */}
      <path
        d="M90 25c-4-7-14-6-14 2 0 7 14 15 14 15s14-8 14-15c0-8-10-9-14-2Z"
        fill="var(--rose)"
      />
      <path
        d="M52 34c-2.2-4-8-3.5-8 1.2 0 4 8 8.5 8 8.5s8-4.5 8-8.5c0-4.7-5.8-5.2-8-1.2Z"
        fill="var(--champagne)"
        opacity="0.9"
      />
      <path
        d="M128 36c-2-3.6-7.2-3.1-7.2 1.1 0 3.6 7.2 7.6 7.2 7.6s7.2-4 7.2-7.6c0-4.2-5.2-4.7-7.2-1.1Z"
        fill="var(--blush)"
        opacity="0.85"
      />

      {/* Left cute bear */}
      <circle cx="54" cy="60" r="10" fill="var(--blush)" />
      <circle cx="54" cy="60" r="5.5" fill="var(--rose)" opacity="0.55" />
      <circle cx="80" cy="57" r="9.5" fill="var(--blush)" />
      <circle cx="67" cy="77" r="24" fill="var(--cream)" />
      <ellipse cx="67" cy="109" rx="22" ry="20" fill="var(--cream)" />
      {/* Left bear face */}
      <circle cx="59" cy="75" r="2.6" fill="var(--night)" />
      <circle cx="71" cy="75" r="2.6" fill="var(--night)" />
      <ellipse cx="54" cy="81" rx="4.5" ry="2.6" fill="var(--rose)" opacity="0.65" />
      <ellipse cx="65" cy="81" rx="3.4" ry="2.4" fill="var(--rose)" opacity="0.4" />
      <path d="M62 81c2 2.5 5 2.5 7 0" stroke="var(--wine)" strokeWidth="2" strokeLinecap="round" />

      {/* Right cute bear */}
      <circle cx="101" cy="57" r="9.5" fill="var(--rose)" />
      <circle cx="126" cy="60" r="10" fill="var(--rose)" />
      <circle cx="126" cy="60" r="5.5" fill="var(--wine)" opacity="0.45" />
      <circle cx="113" cy="77" r="24" fill="var(--blush)" />
      <ellipse cx="113" cy="109" rx="22" ry="20" fill="var(--blush)" />
      {/* Right bear face */}
      <circle cx="109" cy="75" r="2.6" fill="var(--night)" />
      <circle cx="121" cy="75" r="2.6" fill="var(--night)" />
      <ellipse cx="126" cy="81" rx="4.5" ry="2.6" fill="var(--rose)" opacity="0.7" />
      <path
        d="M111 81c2 2.5 5 2.5 7 0"
        stroke="var(--wine)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Hugging arms & center heart */}
      <path
        d="M78 100c9 5 18 5 26 0"
        stroke="var(--wine)"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M90 95c-2.8-5-9.8-4.2-9.8 1.4 0 4.9 9.8 10.6 9.8 10.6s9.8-5.7 9.8-10.6c0-5.6-7-6.4-9.8-1.4Z"
        fill="var(--rose)"
      />
    </svg>
  );
}

export function WingedLetterCartoon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left wing */}
      <path
        d="M44 58c-16-14-31-14-34-4-2 7 7 15 17 16-10 3-13 11-8 16 5 5 18 0 26-10"
        fill="var(--blush)"
        stroke="var(--rose)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Right wing */}
      <path
        d="M116 58c16-14 31-14 34-4 2 7-7 15-17 16 10 3 13 11 8 16-5 5-18 0-26-10"
        fill="var(--blush)"
        stroke="var(--rose)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Envelope body */}
      <rect
        x="40"
        y="36"
        width="80"
        height="54"
        rx="10"
        fill="var(--cream)"
        stroke="var(--champagne)"
        strokeWidth="2.5"
      />
      <path
        d="M42 40l38 28 38-28"
        stroke="var(--rose)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Cute kawaii eyes on envelope */}
      <circle cx="63" cy="70" r="2.2" fill="var(--wine)" />
      <circle cx="97" cy="70" r="2.2" fill="var(--wine)" />
      <path
        d="M76 74c2.5 2.5 5.5 2.5 8 0"
        stroke="var(--wine)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Heart seal */}
      <path
        d="M80 57c-2.5-4.3-8.5-3.6-8.5 1.2 0 4.2 8.5 9.2 8.5 9.2s8.5-5 8.5-9.2c0-4.8-6-5.5-8.5-1.2Z"
        fill="var(--rose)"
      />
      {/* Sparkles */}
      <path d="M26 24l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="var(--champagne)" />
      <path d="M134 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="var(--rose)" />
    </svg>
  );
}

export function KawaiiHeartCartoon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cute heart character */}
      <path
        d="M65 36C55 19 24 21 24 47c0 24 41 49 41 49s41-25 41-49c0-26-31-28-41-11Z"
        fill="var(--rose)"
        stroke="var(--blush)"
        strokeWidth="3"
      />
      {/* Highlight */}
      <path
        d="M36 42c2-7 8-11 14-10"
        stroke="var(--cream)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Happy winking eyes */}
      <path d="M46 53c2-3 6-3 8 0" stroke="var(--night)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M76 53c2-3 6-3 8 0" stroke="var(--night)" strokeWidth="2.6" strokeLinecap="round" />
      {/* Rosy cheeks */}
      <ellipse cx="42" cy="60" rx="5" ry="3" fill="var(--wine)" opacity="0.35" />
      <ellipse cx="88" cy="60" rx="5" ry="3" fill="var(--wine)" opacity="0.35" />
      {/* Smile */}
      <path
        d="M58 61c3.5 4.5 10.5 4.5 14 0"
        stroke="var(--night)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Tiny floating kiss heart */}
      <path
        d="M108 26c-2-3.4-6.8-2.9-6.8 1 0 3.4 6.8 7.2 6.8 7.2s6.8-3.8 6.8-7.2c0-3.9-4.8-4.4-6.8-1Z"
        fill="var(--champagne)"
      />
      <path d="M21 82l2.2 5 5 2.2-5 2.2-2.2 5-2.2-5-5-2.2 5-2.2 2.2-5Z" fill="var(--champagne)" />
    </svg>
  );
}

export function CupidArrowSticker({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 150 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Arrow shaft */}
      <path d="M18 68L130 22" stroke="var(--champagne)" strokeWidth="3" strokeLinecap="round" />
      {/* Feathers */}
      <path
        d="M18 68l-9-11m9 11l3 13m7-17l-9-11m9 11l3 13"
        stroke="var(--champagne)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M119 19l15 1-8 13"
        stroke="var(--champagne)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Two interlocked hearts */}
      <path
        d="M66 42c-3.5-6-12.5-5-12.5 2 0 6.5 12.5 14 12.5 14s12.5-7.5 12.5-14c0-7-9-8-12.5-2Z"
        fill="var(--rose)"
        stroke="var(--cream)"
        strokeWidth="2"
      />
      <path
        d="M84 37c-3-5-10.5-4.2-10.5 1.7 0 5.5 10.5 11.8 10.5 11.8s10.5-6.3 10.5-11.8c0-5.9-7.5-6.7-10.5-1.7Z"
        fill="var(--blush)"
        stroke="var(--wine)"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function MoonlightKittiesCartoon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Crescent moon */}
      <path
        d="M138 22c-10 4-16 14-14 25 2 12 13 20 25 18-10 8-25 6-33-4-8-11-6-26 5-34 5-4 11-5 17-5Z"
        fill="var(--champagne)"
        opacity="0.9"
      />
      {/* Left kitty */}
      <path d="M44 64l6-17 13 10Z" fill="var(--cream)" />
      <path d="M84 64l-6-17-13 10Z" fill="var(--cream)" />
      <path d="M48 61l3-9 7 6Z" fill="var(--rose)" opacity="0.55" />
      <ellipse cx="64" cy="79" rx="23" ry="20" fill="var(--cream)" />
      <ellipse cx="66" cy="111" rx="20" ry="18" fill="var(--cream)" />
      <circle cx="56" cy="77" r="2.5" fill="var(--night)" />
      <circle cx="71" cy="77" r="2.5" fill="var(--night)" />
      <ellipse cx="51" cy="83" rx="4" ry="2.2" fill="var(--rose)" opacity="0.65" />
      <path d="M61 82c2 2 5 2 7 0" stroke="var(--wine)" strokeWidth="2" strokeLinecap="round" />
      {/* Right kitty */}
      <path d="M96 66l6-16 13 9Z" fill="var(--blush)" />
      <path d="M136 66l-6-16-13 9Z" fill="var(--blush)" />
      <path d="M132 63l-3-9-7 6Z" fill="var(--rose)" opacity="0.6" />
      <ellipse cx="116" cy="80" rx="23" ry="20" fill="var(--blush)" />
      <ellipse cx="114" cy="111" rx="20" ry="18" fill="var(--blush)" />
      <circle cx="109" cy="78" r="2.5" fill="var(--night)" />
      <circle cx="124" cy="78" r="2.5" fill="var(--night)" />
      <ellipse cx="129" cy="84" rx="4" ry="2.2" fill="var(--rose)" opacity="0.65" />
      <path d="M113 83c2 2 5 2 7 0" stroke="var(--wine)" strokeWidth="2" strokeLinecap="round" />
      {/* Tail curl */}
      <path
        d="M134 118c13-2 17-12 12-19"
        stroke="var(--rose)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Heart between kitties */}
      <path
        d="M90 48c-3-5.2-10.5-4.4-10.5 1.5 0 5.2 10.5 11.2 10.5 11.2s10.5-6 10.5-11.2c0-5.9-7.5-6.7-10.5-1.5Z"
        fill="var(--rose)"
      />
    </svg>
  );
}

export function PolaroidCameraCartoon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Camera body */}
      <rect
        x="30"
        y="32"
        width="100"
        height="66"
        rx="16"
        fill="var(--cream)"
        stroke="var(--rose)"
        strokeWidth="3"
      />
      <rect x="30" y="56" width="100" height="16" fill="var(--blush)" />
      {/* Shutter & flash */}
      <rect x="44" y="25" width="16" height="7" rx="3" fill="var(--champagne)" />
      <rect x="100" y="40" width="18" height="11" rx="4" fill="var(--champagne)" />
      {/* Lens */}
      <circle
        cx="80"
        cy="64"
        r="21"
        fill="var(--night)"
        stroke="var(--champagne)"
        strokeWidth="3"
      />
      <circle cx="80" cy="64" r="13" fill="var(--wine)" />
      <circle cx="74" cy="58" r="4" fill="var(--cream)" opacity="0.7" />
      {/* Heart sparkle out of flash */}
      <path
        d="M138 22c-2.5-4.2-8.5-3.5-8.5 1.2 0 4.2 8.5 9 8.5 9s8.5-4.8 8.5-9c0-4.7-6-5.4-8.5-1.2Z"
        fill="var(--rose)"
      />
      <path
        d="M20 40l2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.5 2.5-5.5Z"
        fill="var(--champagne)"
      />
    </svg>
  );
}

export function LovePotionBottleCartoon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cork */}
      <rect x="49" y="18" width="22" height="14" rx="4" fill="var(--champagne)" />
      {/* Neck */}
      <rect
        x="45"
        y="30"
        width="30"
        height="12"
        rx="5"
        fill="var(--cream)"
        stroke="var(--champagne)"
        strokeWidth="2.5"
      />
      {/* Bottle */}
      <circle cx="60" cy="78" r="34" fill="var(--wine)" stroke="var(--blush)" strokeWidth="3" />
      {/* Glowing liquid */}
      <path d="M31 82c10 6 20-5 29 0s19 5 29-1c-2 16-14 28-29 28S33 98 31 82Z" fill="var(--rose)" />
      {/* Heart label */}
      <path
        d="M60 66c-3-5-10-4-10 1.6 0 4.8 10 10.4 10 10.4s10-5.6 10-10.4c0-5.6-7-6.6-10-1.6Z"
        fill="var(--cream)"
      />
      {/* Floating heart bubbles */}
      <circle cx="88" cy="30" r="3" fill="var(--rose)" />
      <path d="M24 38l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" fill="var(--champagne)" />
    </svg>
  );
}

export function ShootingStarHeartCartoon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 150 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Curved star trail */}
      <path
        d="M16 66C44 64 78 48 112 24"
        stroke="var(--champagne)"
        strokeWidth="3"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      <path
        d="M28 74C52 70 80 57 108 37"
        stroke="var(--rose)"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Star */}
      <path
        d="M118 12l5 11 12 2-9 8 2 12-10-6-11 6 2-12-9-8 12-2 6-11Z"
        fill="var(--champagne)"
        stroke="var(--cream)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Mini heart on trail */}
      <path
        d="M66 47c-2.4-4-8.2-3.3-8.2 1.2 0 4 8.2 8.6 8.2 8.6s8.2-4.6 8.2-8.6c0-4.5-5.8-5.2-8.2-1.2Z"
        fill="var(--rose)"
      />
    </svg>
  );
}
