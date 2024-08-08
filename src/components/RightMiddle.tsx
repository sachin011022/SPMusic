import Footer from "./Footer";

import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function RightMiddle() {
  return (
    <div className=' bg-black  w-full h-full'>
      <div className='h-[73vh] lg:h-[73vh] w-full rounded-lg'>
        <main className='bg-[#1d1d1d] h-full rounded-lg overflow-hidden mt-2 over'>
          <div className='my-4 flex items-center justify-center flex-col space-y-4'>
            <h1 className='text-center text-2xl'>Welcome User</h1>
            <p className='text-center'>to search the song</p>
            <Button variant={"destructive"}>
              <Link to={"/search"}>Search</Link>
            </Button>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default RightMiddle;
