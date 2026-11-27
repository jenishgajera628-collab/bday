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

export type HeartPhoto = {
  id: number;
  src: string;
  title: string;
  caption: string;
  focalPoint?: string;
  tilt: number;
};

export const centerHeartPortrait: HeartPhoto = {
  id: 0,
  src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.41.11_AM_9325cd95.jpeg",
  title: "Always My Favourite",
  caption: "The little face that holds my whole heart",
  focalPoint: "50% 42%",
  tilt: 0,
};

export const heartCollagePhotos: HeartPhoto[] = [
  {
    id: 1,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.53_AM_cd01da4f.jpeg",
    title: "Pink Lantern Glow",
    caption: "Softest smile under rosy lights",
    focalPoint: "50% 28%",
    tilt: -2.2,
  },
  {
    id: 2,
    src: "/assets/aistudio/WhatsApp_Reel_2026-11-27_at_10.55.15_AM_14613ff4.jpeg",
    title: "Magenta Silk Grace",
    caption: "Pearl necklace & brightest smile",
    focalPoint: "46% 24%",
    tilt: 1.8,
  },
  {
    id: 3,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.50_AM__1__ad172950.jpeg",
    title: "Golden Hour Grace",
    caption: "Warm sunlight & jhumkas",
    focalPoint: "44% 24%",
    tilt: -1.6,
  },
  {
    id: 4,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.49_AM_a6523b69.jpeg",
    title: "Blushing Pink",
    caption: "Playful kisses & brightest eyes",
    focalPoint: "50% 28%",
    tilt: 2.0,
  },
  {
    id: 5,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.55.16_AM_7ffa5305.jpeg",
    title: "Polka & Navy Warmth",
    caption: "Gentle gaze in warm evening light",
    focalPoint: "46% 26%",
    tilt: -2.1,
  },
  {
    id: 6,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.51_AM_e71b95e1.jpeg",
    title: "Serene Sunlight",
    caption: "Eyes closed, pure peace",
    focalPoint: "50% 26%",
    tilt: 1.5,
  },
  {
    id: 7,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.45_AM_cd4b061c.jpeg",
    title: "Mehndi & Sunshine",
    caption: "Festive sparkle in every detail",
    focalPoint: "50% 24%",
    tilt: -1.3,
  },
  {
    id: 8,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.43_AM_5a848c20.jpeg",
    title: "Emerald Sparkle",
    caption: "Shining brighter than the sequins",
    focalPoint: "46% 28%",
    tilt: 1.9,
  },
  {
    id: 9,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.48_AM__2__c33b0848.jpeg",
    title: "Butterfly Daydream",
    caption: "Round frames & sweetest pout",
    focalPoint: "50% 28%",
    tilt: -1.8,
  },
  {
    id: 10,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.55.17_AM_df78317f.jpeg",
    title: "Crisp White Classic",
    caption: "Effortless charm in a white shirt",
    focalPoint: "50% 34%",
    tilt: 1.4,
  },
  {
    id: 11,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.28_AM__2__59e5b7be.jpeg",
    title: "Under Blue Skies",
    caption: "Sun-kissed & smiling wide",
    focalPoint: "46% 32%",
    tilt: -2.0,
  },
  {
    id: 12,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.29_AM_d3fc11f0.jpeg",
    title: "Royal Green Saree",
    caption: "Gold heritage & timeless grace",
    focalPoint: "44% 24%",
    tilt: 2.2,
  },
  {
    id: 13,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.48_AM_6279575d.jpeg",
    title: "Little Bindi",
    caption: "Pastel pink & gentle morning smile",
    focalPoint: "50% 26%",
    tilt: -1.5,
  },
  {
    id: 14,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.55.18_AM_3fa1e986.jpeg",
    title: "Blush Mirror Lehenga",
    caption: "Soft pastel pink & festive shimmer",
    focalPoint: "52% 32%",
    tilt: 1.7,
  },
  {
    id: 15,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.48_AM__3__e5143156.jpeg",
    title: "Warm Tangerine",
    caption: "Cozy candid in bright orange",
    focalPoint: "42% 30%",
    tilt: -2.1,
  },
  {
    id: 16,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.44_AM_5431a4ba.jpeg",
    title: "Garden Serenity",
    caption: "Mustard & teal amidst green leaves",
    focalPoint: "50% 28%",
    tilt: 1.5,
  },
  {
    id: 17,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.55.19_AM_818f3898.jpeg",
    title: "Crimson Saree Mirror",
    caption: "Rust-red drape & golden jhumkas",
    focalPoint: "54% 28%",
    tilt: -1.4,
  },
  {
    id: 18,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.41_AM_417cc581.jpeg",
    title: "Window Daydream",
    caption: "Sunlight falling across the chair",
    focalPoint: "60% 34%",
    tilt: 2.0,
  },
  {
    id: 19,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.38_AM_777c9ca7.jpeg",
    title: "Teal Mirror Smile",
    caption: "Big bright eyes & playful grin",
    focalPoint: "64% 26%",
    tilt: -1.9,
  },
  {
    id: 20,
    src: "/assets/aistudio/WhatsApp_Reel_2026-11-27_at_10.55.20_AM_b47d27ed.jpeg",
    title: "Pearl Jhumka Cutie",
    caption: "Close-up sparkle & playful bow",
    focalPoint: "40% 32%",
    tilt: 1.6,
  },
  {
    id: 21,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.35_AM_163b2083.jpeg",
    title: "Vintage Sky",
    caption: "Dreamy clouds & golden film grain",
    focalPoint: "48% 28%",
    tilt: -1.5,
  },
  {
    id: 22,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.34_AM_9c5a021a.jpeg",
    title: "Monochrome Sweetheart",
    caption: "Adorable filter & soft smile",
    focalPoint: "60% 30%",
    tilt: 2.2,
  },
  {
    id: 23,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.33_AM__1__31d903b6.jpeg",
    title: "Blue Hibiscus",
    caption: "A tiny flower tucked behind her ear",
    focalPoint: "36% 28%",
    tilt: -2.2,
  },
  {
    id: 24,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.33_AM_642ab773.jpeg",
    title: "Sunbeam Reverie",
    caption: "Warm shadow lines & quiet peace",
    focalPoint: "64% 26%",
    tilt: 1.3,
  },
  {
    id: 25,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.31_AM_4398d2e2.jpeg",
    title: "Sunshine Attitude",
    caption: "Crisp shirt & rosy tinted shades",
    focalPoint: "48% 26%",
    tilt: -1.7,
  },
  {
    id: 26,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.30_AM_da513acd.jpeg",
    title: "Pink Bows",
    caption: "Crimson kurta & curious glance",
    focalPoint: "50% 26%",
    tilt: 1.9,
  },
  {
    id: 27,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.28_AM_7178f140.jpeg",
    title: "Amber Warmth",
    caption: "Soft glow in red & gold",
    focalPoint: "56% 42%",
    tilt: -1.8,
  },
  {
    id: 28,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.27_AM_54c1a6e2.jpeg",
    title: "Fairy Lights",
    caption: "Glowing lights & serene smile",
    focalPoint: "50% 34%",
    tilt: 1.5,
  },
  {
    id: 29,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.28_AM__1__f4f147de.jpeg",
    title: "Cloud Nine Dimples",
    caption: "Little hearts, bows & dimple smile",
    focalPoint: "48% 26%",
    tilt: -2.0,
  },
  {
    id: 30,
    src: "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.13.22_AM_e686b7de.jpeg",
    title: "Dreamy Mirror Frame",
    caption: "Soft motion blur & timeless charm",
    focalPoint: "60% 30%",
    tilt: 1.1,
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