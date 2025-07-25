export interface Song {
  title: string;
  artist: string;
  year: number;
  note: string;
  image?: string; // ジャケット画像のパス（オプショナル）
  youtube?: string; // YouTubeリンク（オプショナル）
}

export interface AgeGroup {
  age_group: string;
  comment: string;
  songs: Song[];
}

export type SongsData = AgeGroup[];
