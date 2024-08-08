import { useContext } from "react";
import SongContext from "@/context/SongContext";
import { RootObject, TracksDatum } from "@/types";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import play from "@/assets/icon/play.svg";

type Props = {
  data: RootObject;
};

function TableSection({ data }: Props) {
  const { setActiveSong } = useContext(SongContext);
  const seperateByComma = (number: number) => {
    return number.toLocaleString("en-IN");
  };
  function secondsToMinutesSeconds(seconds: number): string {
    let minutes: number = Math.floor(seconds / 60);
    let remainingSeconds: number = seconds % 60;

    // Format the output as MM:SS
    let formattedTime: string = `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;

    return formattedTime;
  }

  function handleToSetSong(data: RootObject, items: TracksDatum, i: number) {
    setActiveSong({ song: data, data: items, i: i });
  }
  return (
    <div className='p-6'>
      <h1 className='text-xl my-3'>More Song </h1>
      <Table>
        {data?.tracks?.data?.map((items, i) => {
          return (
            <TableBody key={items?.id}>
              <TableRow>
                <TableCell className='font-medium '>
                  <img
                    src={play}
                    alt='play'
                    className='cursor-pointer text-white p-2 rounded-full bg-white'
                    onClick={() => handleToSetSong(data, items, i)}
                  />
                </TableCell>
                <>
                  <TableCell>{items?.title}</TableCell>
                </>
                <TableCell>{seperateByComma(items?.rank)}</TableCell>
                <TableCell>
                  {secondsToMinutesSeconds(items?.duration)}
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </div>
  );
}

export default TableSection;
