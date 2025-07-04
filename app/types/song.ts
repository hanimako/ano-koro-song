export interface Song {
  title: string;
  artist: string;
  year: number;
  note: string;
}

export interface AgeGroup {
  age_group: string;
  comment: string;
  songs: Song[];
}

export type SongsData = AgeGroup[];
