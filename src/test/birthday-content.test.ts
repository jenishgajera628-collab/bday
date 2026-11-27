import { describe, expect, it } from "vitest";

import {
  centerHeartPortrait,
  galleryMemories,
  getBirthdayUnlockTimestamp,
  getCountdownParts,
  heartCollagePhotos,
  storyTimeline,
  thingsToAdore,
} from "@/lib/birthday-content";

describe("birthday keepsake content", () => {
  it("includes at least eight editable gallery memories", () => {
    expect(galleryMemories.length).toBeGreaterThanOrEqual(8);
  });

  it("uses 30 distinct Yuku heart collage photos including the new uploads and keeps center portrait separate", () => {
    expect(heartCollagePhotos.length).toBe(30);
    const uniqueSrcs = new Set(heartCollagePhotos.map((photo) => photo.src));
    expect(uniqueSrcs.size).toBe(heartCollagePhotos.length);
    expect(uniqueSrcs.has(centerHeartPortrait.src)).toBe(false);
    expect(centerHeartPortrait.src).toBe(
      "/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.41.11_AM_9325cd95.jpeg",
    );
    expect(
      uniqueSrcs.has("/assets/aistudio/WhatsApp_Image_2026-11-27_at_10.55.19_AM_818f3898.jpeg"),
    ).toBe(true);
    expect(
      uniqueSrcs.has("/assets/aistudio/WhatsApp_Reel_2026-11-27_at_10.55.15_AM_14613ff4.jpeg"),
    ).toBe(true);
    for (const photo of heartCollagePhotos) {
      expect(photo.src).toMatch(/^\/assets\/aistudio\/WhatsApp_(Image|Reel)_2026-11-27_/);
    }
  });

  it("includes all seven requested story chapters", () => {
    expect(storyTimeline).toHaveLength(7);
  });

  it("includes the eight requested things to adore", () => {
    expect(thingsToAdore).toHaveLength(8);
  });

  it("stays locked until 12:00 AM on January 6, 2027 and unlocks at midnight", () => {
    const unlockAt = getBirthdayUnlockTimestamp();
    const justBeforeMidnight = new Date(2027, 0, 5, 23, 59, 59, 0).getTime();
    const atMidnight = new Date(2027, 0, 6, 0, 0, 0, 0).getTime();

    const lockedParts = getCountdownParts(unlockAt, justBeforeMidnight);
    expect(lockedParts.totalMs).toBe(1000);
    expect(lockedParts.days).toBe(0);
    expect(lockedParts.hours).toBe(0);
    expect(lockedParts.minutes).toBe(0);
    expect(lockedParts.seconds).toBe(1);

    const unlockedParts = getCountdownParts(unlockAt, atMidnight);
    expect(unlockedParts.totalMs).toBe(0);
  });
});