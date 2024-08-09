export interface PlayerState {
  currentSongs: any;
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: any;
  genreListId: string;
  isUserExist: boolean;
}

export interface RootObject {
  artist: Artist;
  available: boolean;
  contributors: Contributor[];
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  fans: number;
  genre_id: number;
  genres: Genres;
  id: number;
  label: string;
  link: string;
  md5_image: string;
  nb_tracks: number;
  record_type: string;
  release_date: Date;
  share: string;
  title: string;
  tracklist: string;
  tracks: Tracks;
  type: string;
  upc: string;
}

export interface Artist {
  id: number;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  tracklist: string;
  type: string;
}

export interface Contributor {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  radio: boolean;
  role: string;
  share: string;
  tracklist: string;
  type: string;
}

export interface Genres {
  data: ArtistElement[];
}

export interface ArtistElement {
  id: number;
  name: string;
  picture?: string;
  tracklist?: string;
  type: string;
}

export interface Tracks {
  data: TracksDatum[];
}

export interface TracksDatum {
  album: Album;
  artist: ArtistElement;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
}

export interface Album {
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  id: number;
  md5_image: string;
  title: string;
  tracklist: string;
  type: string;
}
export type Song = {
  // Define the properties of the Song type here
};
export interface User {
  // Define the properties of the User type here
  isLoggedIn: boolean;
  // Add more properties as needed
}

export interface MusicPlayerState {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song | null;
  genreListId: string;
  user: User | null;
  isUserLoggedIn: boolean;
}
