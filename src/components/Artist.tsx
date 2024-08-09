import { RootObject } from "@/types";
interface ArtistProps {
  data: RootObject | any;
}
function Artist({ data }: ArtistProps) {
  return (
    <div className=' bg-black  w-full h-full'>
      <div className='h-[73vh] lg:h-[73vh] w-full rounded-lg'>
        <main className='bg-[#1d1d1d] h-full rounded-lg overflow-hidden mt-2 over'>
          <div className='flex items-center gap-6 sm:flex-row md:flex-col'>
            <div className='size-[50vh] rounded-lg overflow-hidden '>
              <img
                src={data?.picture_xl}
                alt={data?.name}
                className='size-full object-cover object-center'
              />
            </div>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl'>Name: {data?.name}</h1>
              <p className='text-xl'>Type: {data?.type}</p>
              <span>Total Album: {data?.nb_album}</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Artist;
