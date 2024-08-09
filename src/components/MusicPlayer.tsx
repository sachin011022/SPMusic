import { PauseCircle, PlayCircle } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";

import SongContext from "@/context/SongContext";
import reactLogo from "@/assets/react.svg";
const MusicPlayer: React.FC = () => {
  const value = useContext(SongContext);

  const [rangeValue, setRangeValue] = useState(0);

  const [playToggle, setPlayToggle] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const songRef = useRef<HTMLAudioElement>(null);

  const handleToggle = () => {
    setPlayToggle(!playToggle);
    if (!playToggle && songRef.current) {
      songRef.current.play();
    } else if (songRef.current) {
      songRef.current.pause();
    }
  };

  // const handleToChange = () => {
  //   setActiveColor(!activeColor);
  // };
  // const handleLoopColor = () => {
  //   setLoopColor(!loopColor);
  // };
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setCurrentTime(value);
    if (songRef.current) {
      songRef.current.currentTime = value;
    }
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (value.state.currentSongs?.preview && songRef.current) {
      songRef.current.play();
      setPlayToggle(true);
    }
  }, [value.state.currentSongs]);

  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex items-center gap-x-3 p-3  w-[350px]'>
        <div className='size-14 rounded-lg overflow-hidden'>
          <img
            src={value.state.currentSongs?.album?.cover_medium || reactLogo}
            alt='NoSong'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='flex flex-col w-3/4 '>
          <h1 className='text-xl  truncate'>
            {value.state.currentSongs?.title}
          </h1>
          <p className='text-[17px] /25 truncate'>
            {value.state.currentSongs?.artist?.name}
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center w-[608px]'>
        <div className='w-full flex flex-col items-center justify-center gap-y-2'>
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex items-center gap-x-2 text-center '>
              {playToggle ? (
                <PauseCircle
                  onClick={handleToggle}
                  size={30}
                  className=' cursor-pointer '
                />
              ) : (
                <PlayCircle
                  onClick={handleToggle}
                  size={30}
                  className='text-[#1FDF64] cursor-pointer'
                />
              )}
            </div>
          </div>
          <div className='flex items-center gap-x-3 '>
            <audio
              ref={songRef}
              defaultValue={rangeValue}
              src={value.state.currentSongs?.preview}
              onLoadedMetadata={() =>
                setDuration(songRef.current?.duration ?? 0)
              }
              onTimeUpdate={() =>
                setCurrentTime(songRef.current?.currentTime ?? 0)
              }
              onEnded={() => {
                setPlayToggle(false);
                setRangeValue(0);
              }}
            ></audio>
            <p>{formatTime(currentTime)}</p>
            <input
              type='range'
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleRangeChange}
              step={0.001}
              className='w-[400px] cursor-pointer'
            />
            <p>{formatTime(duration)}</p>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-x-3 px-2'></div>
    </div>
  );
};

export default MusicPlayer;
