import songsData from "../data/songs.json";
import { SongsData, AgeGroup } from "../types/song";

export function getSongsData(): SongsData {
  return songsData as SongsData;
}

export function getAgeGroup(ageGroup: string): AgeGroup | undefined {
  const data = getSongsData();
  return data.find((group) => group.age_group === ageGroup);
}

export function getAgeGroups(): string[] {
  const data = getSongsData();
  return data.map((group) => group.age_group);
}

export function getAgeGroupByIndex(index: number): AgeGroup | undefined {
  const data = getSongsData();
  return data[index];
}
