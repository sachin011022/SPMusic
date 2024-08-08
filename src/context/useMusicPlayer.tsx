// useMusicPlayer.ts
import { MusicPlayerState, Song, User } from "@/types";
import { useState, useCallback } from "react";

export interface MusicPlayerActions {
  playSong: (index: string) => void;
  pauseSong: () => void;
  setSongs: (songs: Song[]) => void;
  setActiveSong: (song: Song | null) => void;
  setGenreListId: (id: string) => void;
}

export interface MusicPlayerActions {
  playSong: (index: string) => void;
  pauseSong: () => void;
  setSongs: (songs: Song[]) => void;
  setActiveSong: (song: Song | null) => void;
  setGenreListId: (id: string) => void;
  setUser: any;
}

const useMusicPlayer = (): [MusicPlayerState, MusicPlayerActions] => {
  const [state, setState] = useState<MusicPlayerState>({
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: null,
    genreListId: "",
    user: null,
    isUserLoggedIn: false,
  });

  const playSong = useCallback((index: string) => {
    setState((prevState) => ({
      ...prevState,
      isActive: true,
      isPlaying: true,
      currentIndex: parseInt(index),
      activeSong: prevState.currentSongs[parseInt(index)] || null,
    }));
  }, []);

  const pauseSong = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      isPlaying: false,
    }));
  }, []);

  const setSongs = useCallback((songs: Song[]) => {
    setState((prevState) => ({
      ...prevState,
      currentSongs: songs,
      activeSong: songs[prevState.currentIndex] || null,
    }));
  }, []);

  const setActiveSong = useCallback((song: Song | null) => {
    setState((prevState) => ({
      ...prevState,
      activeSong: song,
    }));
  }, []);

  const setGenreListId = useCallback((id: string) => {
    setState((prevState) => ({
      ...prevState,
      genreListId: id,
    }));
  }, []);

  const setUser = useCallback((user: User | null) => {
    setState((prevState) => ({
      ...prevState,
      user,
      isUserLoggedIn: !!user,
    }));
  }, []);

  const loginUser = useCallback((user: User) => {
    setState((prevState) => ({
      ...prevState,
      user,
      isUserLoggedIn: true,
    }));
  }, []);

  const logoutUser = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      user: null,
      isUserLoggedIn: false,
    }));
  }, []);

  // Return state and actions together
  return [
    state,
    {
      playSong,
      pauseSong,
      setSongs,
      setActiveSong,
      setGenreListId,
      setUser,
    },
  ];
};

export default useMusicPlayer;
