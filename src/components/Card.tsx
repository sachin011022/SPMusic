import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface cardProps {
  searchValue: any[];
  isLoading: boolean;
}
function Card({ searchValue, isLoading }: cardProps) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-full p-5'>
      <h1>Search Result...</h1>
      <div className='w-full  p-4 '>
        {isLoading ? (
          <Loader2
            size={32}
            className='flex items-center justify-center animate-spin w-full'
          />
        ) : (
          <div className=' w-full grid grid-cols-5 place-items-center '>
            {searchValue.map((value) => {
              return (
                <div
                  className='w-[162px] h-[210px] mt-2 cursor-pointer'
                  key={value?.id}
                  onClick={() => navigate(`/album/${value?.album?.id}`)}
                >
                  <img
                    src={value?.album?.cover_medium}
                    alt='lgo'
                    className='w-full h-[20vh] rounded-lg'
                  />
                  <h1 className='text-xl truncate'>{value?.title}</h1>
                  <p className='truncate text-base text-slate-600'>
                    {value?.artist?.name}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
