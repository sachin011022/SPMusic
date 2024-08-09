import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import { RootObject } from "@/types";
import logo from "../assets/logo.png";
import { useFetchSong } from "@/react-query/QueryAndMutation";
import Footer from "@/components/Footer";
import play from "@/assets/icon/play.svg";
import TableSection from "@/components/TableSection";
import Artist from "@/components/Artist";
import SongContext from "@/context/SongContext";

function Album() {
  const navigate = useNavigate();
  const [data, setData] = useState<RootObject>();
  const { value, id } = useParams();
  const context = useContext(SongContext);

  const { mutateAsync: albumValue, isPending: isAlbumValue } = useFetchSong();
  useEffect(() => {
    const fetchData = async (value: string, id: string) => {
      const response = await albumValue({
        value: value as string,
        id: id as string,
      });
      setData(response);
    };

    fetchData(value as string, id as string);
  }, [value, id]);
  if (!context) {
    throw new Error(
      "useContext(SongContext) must be used within a SongContextProvider"
    );
  }

  // Example usage of state and actions

  return (
    <div className=' bg-black  w-full h-full'>
      <div className='h-[73vh] lg:h-[73vh] w-full rounded-lg'>
        <main className='bg-[#1d1d1d] h-full rounded-lg overflow-hidden mt-2 over'>
          {value == "album" && (
            <>
              {isAlbumValue ? (
                <div className='w-full h-[43vh]  p-7 flex items-center justify-center'>
                  <Loader2
                    size={32}
                    className='flex items-center justify-center animate-spin w-full'
                  />
                </div>
              ) : (
                <div className='w-full h-[43vh]  p-7'>
                  <div className='w-[14vw] h-[28vh] '>
                    <img
                      src={data?.cover_medium || logo}
                      alt=''
                      className='w-full h-full object-cover object-center rounded-lg'
                    />
                  </div>
                  <h1 className='text-xl mt-2'>{data?.title}</h1>
                  <p
                    className='text-md cursor-pointer'
                    onClick={() => navigate(`/artist/${data?.artist?.id}`)}
                  >
                    {data?.artist?.name}
                  </p>
                </div>
              )}
              {data && (
                <div className='p-6'>
                  <div className='p-4 cursor-pointer bg-green-600 w-[60px] h-[60px] flex items-center justify-center rounded-full'>
                    <img src={play} alt='play' />
                  </div>
                </div>
              )}

              {data?.tracks?.data && (
                <div className='w-full  h-auto'>
                  <TableSection data={data} />
                </div>
              )}
            </>
          )}
          {value == "artist" && (
            <div className='p-6'>
              <Artist data={data} />
            </div>
          )}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Album;
