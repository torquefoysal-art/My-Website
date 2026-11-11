import type { SceneMood } from "@/lib/content";

let mood: SceneMood = "gold";

export function setSceneMood(next: SceneMood) {
  mood = next;
}

export function getSceneMood() {
  return mood;
}
