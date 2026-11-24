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