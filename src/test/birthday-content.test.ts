import { describe, expect, it } from "vitest";

import {
  galleryMemories,
  getBirthdayUnlockTimestamp,
  getCountdownParts,
  storyTimeline,
  thingsToAdore,
} from "@/lib/birthday-content";

describe("birthday keepsake content", () => {
  it("includes at least eight editable gallery memories", () => {
    expect(galleryMemories.length).toBeGreaterThanOrEqual(8);
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