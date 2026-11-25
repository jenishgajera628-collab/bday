export type PhotoMemory = {
  id: number;
  title: string;
  caption: string;
  note: string;
  artClass: string;
  image: string | null;
};

export const ENABLE_COUNTDOWN_LOCK = false;

export const BIRTHDAY_UNLOCK_DATE = {
  year: 2027,
  monthIndex: 0, // January
  day: 6,
  hour: 0,
  minute: 0,
  second: 0,
} as const;

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
};

export function getBirthdayUnlockTimestamp(): number {
  return new Date(
    BIRTHDAY_UNLOCK_DATE.year,
    BIRTHDAY_UNLOCK_DATE.monthIndex,
    BIRTHDAY_UNLOCK_DATE.day,
    BIRTHDAY_UNLOCK_DATE.hour,
    BIRTHDAY_UNLOCK_DATE.minute,
    BIRTHDAY_UNLOCK_DATE.second,
    0,
  ).getTime();
}

export function getCountdownParts(targetTimestamp: number, nowTimestamp: number): CountdownParts {
  const totalMs = Math.max(0, targetTimestamp - nowTimestamp);
  const totalSeconds = Math.ceil(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, totalMs };
}

export const heroMemory: PhotoMemory = {
  id: 0,
  title: "A little place for us",
  caption: "A moment worth keeping",
  note: "",
  artClass: "memory-art--one",
  image: "/assets/aistudio/image_242ec018.png",
};

export type BeginningMemory = PhotoMemory & {
  sticker: string;
  tapeVariant: "rose" | "champagne" | "blush";
};

export const masterBeginningMemory: PhotoMemory = {
  id: 0,
  title: "My Whole Heart 🫶✨",
  caption: "No refunds, stuck with me forever 🤭💘",
  note: "Hands intertwined, hearts completely full — this one is my favorite masterpiece of us. 🥰💞",
  artClass: "memory-art--five",
  image: "/assets/beginning/master-moment.jpg",
};

export const beginningMemories: BeginningMemory[] = [
  {
    id: 1,
    title: "Mirror Magic",
    caption: "Right beside you 😘",
    note: "Even behind the phone, my favorite view is always you.",
    artClass: "memory-art--one",
    image: "/assets/beginning/moment-1.jpg",
    sticker: "xoxo 😘",
    tapeVariant: "rose",
  },
  {
    id: 2,
    title: "Softest Smile",
    caption: "Head on my shoulder 🥹",
    note: "That sweet smile of yours makes the whole world slow down.",
    artClass: "memory-art--two",
    image: "/assets/beginning/moment-2.jpg",
    sticker: "cutie 🥹",
    tapeVariant: "champagne",
  },
  {
    id: 3,
    title: "Simply Us",
    caption: "Hand on my heart 🥰",
    note: "Quiet little moments like this feel like my whole universe.",
    artClass: "memory-art--three",
    image: "/assets/beginning/moment-3.jpg",
    sticker: "my fav 🥰",
    tapeVariant: "blush",
  },
  {
    id: 4,
    title: "Closer Still",
    caption: "Just a whisper away 🙈",
    note: "Every second wrapped in your warmth feels just like home.",
    artClass: "memory-art--four",
    image: "/assets/beginning/moment-4.jpg",
    sticker: "love u 🤭",
    tapeVariant: "champagne",
  },
];

export const chapterTwoMasterMemory: PhotoMemory = {
  id: 0,
  title: "Always My Safe Place 🫂🖤",
  caption: "Black fits, warm hugs & endless chaos 🥰🔥",
  note: "Every late-night mirror moment with you turns into my favorite memory of all time. 🌙🫰",
  artClass: "memory-art--six",
  image: "/assets/chapter-two/master-moment.jpg",
};

export const chapterTwoMemories: BeginningMemory[] = [
  {
    id: 1,
    title: "Caught in Black",
    caption: "holding you close 🫂",
    note: "Right behind me, hand around my waist, and my heart completely yours.",
    artClass: "memory-art--one",
    image: "/assets/chapter-two/moment-1.jpg",
    sticker: "mine 🔒",
    tapeVariant: "champagne",
  },
  {
    id: 2,
    title: "Flower & Hugs",
    caption: "that cute blue clip 🌺",
    note: "Wrapped in your arms, smelling like magic and feeling like home.",
    artClass: "memory-art--two",
    image: "/assets/chapter-two/moment-2.jpg",
    sticker: "adorable 🥺",
    tapeVariant: "rose",
  },
  {
    id: 3,
    title: "Flash & Finger Heart",
    caption: "little heart for you 🫰",
    note: "Even with the camera flash blinding us, your tiny heart stole the frame.",
    artClass: "memory-art--three",
    image: "/assets/chapter-two/moment-3.jpg",
    sticker: "my heart 💓",
    tapeVariant: "blush",
  },
  {
    id: 4,
    title: "Look at That Smile",
    caption: "eyes full of love 🤩",
    note: "The way you look up smiling like that melts me every single time.",
    artClass: "memory-art--four",
    image: "/assets/chapter-two/moment-4.jpg",
    sticker: "obsessed 😍",
    tapeVariant: "rose",
  },
];

export const galleryMemories: PhotoMemory[] = [
  {
    id: 1,
    title: "The beginning",
    caption: "A little moment worth keeping",
    note: "[Add the real memory and the little details you want to remember.]",
    artClass: "memory-art--one",
    image: null,
  },
  {
    id: 2,
    title: "A favorite day",
    caption: "One for the scrapbook",
    note: "[Write a few words about this photo.]",
    artClass: "memory-art--two",
    image: null,
  },
  {
    id: 3,
    title: "A little adventure",
    caption: "Somewhere in our story",
    note: "[Add the place, the day, or what made it special.]",
    artClass: "memory-art--three",
    image: null,
  },
  {
    id: 4,
    title: "Just us",
    caption: "A moment to come back to",
    note: "[Replace this with your own memory.]",
    artClass: "memory-art--four",
    image: null,
  },
  {
    id: 5,
    title: "A tiny tradition",
    caption: "The little things",
    note: "[Add the story behind this picture.]",
    artClass: "memory-art--five",
    image: null,
  },
  {
    id: 6,
    title: "A day that made us smile",
    caption: "Saved with love",
    note: "[Write what you would want to remember years from now.]",
    artClass: "memory-art--six",
    image: null,
  },
  {
    id: 7,
    title: "Our kind of fun",
    caption: "A favorite little chaos",
    note: "[Add a memory that sounds like the two of you.]",
    artClass: "memory-art--seven",
    image: null,
  },
  {
    id: 8,
    title: "Today, and everything ahead",
    caption: "The story keeps going",
    note: "[Add a photo and a few words of your own.]",
    artClass: "memory-art--eight",
    image: null,
  },
];

export const storyTimeline = [
  { title: "The Beginning", artClass: "memory-art--one" },
  { title: "Our First Memories", artClass: "memory-art--two" },
  { title: "The Beautiful Moments", artClass: "memory-art--three" },
  { title: "Our Crazy Memories", artClass: "memory-art--four" },
  { title: "Little Fights, Big Love", artClass: "memory-art--five" },
  { title: "Growing Together", artClass: "memory-art--six" },
  { title: "Today and Forever", artClass: "memory-art--seven" },
].map((story, index) => ({
  ...story,
  id: index + 1,
  date: "[Add your date]",
  note: "[Write the real memory that belongs here.]",
}));

export const thingsToAdore = [
  { title: "Your Beautiful Smile", icon: "smile" },
  { title: "Your Eyes", icon: "eye" },
  { title: "Your Pagalpanti", icon: "sparkles" },
  { title: "Your Cute Anger", icon: "flame" },
  { title: "Your Little Habits", icon: "flower" },
  { title: "Your Laugh", icon: "laugh" },
  { title: "Your Kind Heart", icon: "heart" },
  { title: "Everything That Makes You YOU", icon: "star" },
];

export const specialReasons = [
  {
    title: "A little reminder",
    message: "[Write one of the reasons Yuku is special to you.]",
  },
  {
    title: "For a quiet day",
    message: "[Add a message you want her to find when she needs it.]",
  },
  {
    title: "Just because",
    message: "[Add a small, personal reason in your own words.]",
  },
  {
    title: "One more reason",
    message: "[Write another little thing you hope she always knows.]",
  },
];

export const birthdaySong = "/assets/aistudio/Prateek_Kuhad_-_Co2__Official_Audio__7f31d5bd.m4a";

export const birthdayLetter = `My dearest Yuku,

Today is all about you. I wish I could put into words how special you are to me. Every little memory, every smile and every moment we share means more than you know.

You make ordinary days feel extraordinary.

Happy Birthday, my favourite person. ❤️`;