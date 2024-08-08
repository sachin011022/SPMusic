import { Button } from "./ui/button";
import left from "../assets/icon/svgexport-20.svg";
import right from "../assets/icon/svgexport-21.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const isActiveUser = true;
  const navigate = useNavigate();
  return (
    <div className='bg-[#101010] p-4 flex items-center justify-between w-full rounded-lg'>
      <div className='md:flex gap-3 hidden '>
        <img
          src={left}
          alt='left'
          className='bg-black p-2 rounded-full cursor-pointer'
          onClick={() => navigate(-1)}
        />
        <img
          src={right}
          alt='right'
          className='bg-black p-2 rounded-full cursor-pointer'
          onClick={() => navigate(1)}
        />
      </div>

      <div>
        {!isActiveUser ? (
          <>
            <div className='flex gap-3 '>
              <Button className='bg-transparent cursor-pointer'>Sign Up</Button>
              <Button className='bg-slate-50 text-black rounded-full cursor-pointer hover:text-white'>
                Login
              </Button>
            </div>
          </>
        ) : (
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
}

export default Navbar;
