import React, { useEffect, useState } from "react";
import SongContext, { initialState } from "./SongContext";
import { useNavigate } from "react-router-dom";
import { PlayerState } from "@/types";

const SongDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<PlayerState>(initialState);

  const setActiveSong = (payload: { song: any; data?: any; i?: any }) => {
    setState((prevState) => ({
      ...prevState,
      activeSong: payload.song,
      currentSongs: payload?.data?.tracks?.hits
        ? payload.data.tracks.hits
        : payload?.data?.properties
        ? payload.data.tracks
        : payload.data,
      currentIndex: payload.i,
      isActive: true,
    }));
  };
  const navigate = useNavigate();
  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (
      cookieFallback === "[]" ||
      cookieFallback === null ||
      cookieFallback === undefined
    ) {
      navigate("/sign-in");
    }
  }, []);
  const nextSong = (payload: number) => {
    setState((prevState) => ({
      ...prevState,
      activeSong: prevState.currentSongs[payload]?.track
        ? prevState.currentSongs[payload].track
        : prevState.currentSongs[payload],
      currentIndex: payload,
      isActive: true,
    }));
  };

  const prevSong = (payload: number) => {
    setState((prevState) => ({
      ...prevState,
      activeSong: prevState.currentSongs[payload]?.track
        ? prevState.currentSongs[payload].track
        : prevState.currentSongs[payload],
      currentIndex: payload,
      isActive: true,
    }));
  };

  const playPause = (payload: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isPlaying: payload,
    }));
  };

  const selectGenreListId = (payload: string) => {
    setState((prevState) => ({
      ...prevState,
      genreListId: payload,
    }));
  };

  const setUser = (payload: boolean) => {
    setState((prevState) => ({
      ...prevState,
      isUserExist: payload,
    }));
  };

  return (
    <SongContext.Provider
      value={{
        state,
        setActiveSong,
        nextSong,
        prevSong,
        playPause,
        selectGenreListId,
        setUser,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongDataProvider;
