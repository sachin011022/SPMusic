// SongContext.tsx
import { PlayerState } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";
// import { MusicPlayerState, MusicPlayerActions } from "@/types";
export const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
  isUserExist: false,
};

const SongContext = createContext<{
  state: PlayerState;
  setActiveSong: (payload: { song: any; data?: any; i: number }) => void;
  nextSong: (payload: number) => void;
  prevSong: (payload: number) => void;
  playPause: (payload: boolean) => void;
  selectGenreListId: (payload: string) => void;
  setUser: (payload: boolean) => void;
}>({
  state: initialState,
  setActiveSong: () => {},
  nextSong: () => {},
  prevSong: () => {},
  playPause: () => {},
  selectGenreListId: () => {},
  setUser: () => {},
});

export default SongContext;
