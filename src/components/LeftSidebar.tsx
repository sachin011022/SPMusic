import home from "../assets/icon/boldhome.svg";
import search from "../assets/icon/svgexport-4.svg";
import spotify from "../assets/icon/Spotify.svg";
import collapse from "../assets/icon/svgexport-5.svg";
import plus from "../assets/icon/svgexport-6.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function LeftSidebar() {
  const textItems = [
    {
      text: "Legal",
    },
    {
      text: "Safety & Privacy Center",
    },
    {
      text: "Privacy Policy",
    },
    {
      text: "Cookies",
    },
    {
      text: "About Ads",
    },
    {
      text: "Accessibility",
    },
    {
      text: "Cookies",
    },
  ];

  const navigate = useNavigate();
  return (
    <nav className='flex flex-col gap-2 bg-black  w-full '>
      {/* top */}
      <div className='p-6 bg-[#121212] h-auto rounded-xl '>
        <ul className='flex flex-col gap-5'>
          <img
            src={spotify}
            alt='spotify'
            className='h-[24px] w-[88px] md:hidden lg:block'
          />
          <li
            className='flex items-center gap-5  hover:cursor-pointer '
            onClick={() => navigate("/")}
          >
            <img src={home} alt='home' className='' />
            <span className='md:hidden lg:block'>Home</span>
          </li>
          <li className='flex items-center gap-5  hover:cursor-pointer'>
            <img src={search} alt='search' />
            <span
              className='md:hidden lg:block'
              onClick={() => navigate("/search")}
            >
              Search
            </span>
          </li>
        </ul>
      </div>
      {/* bottom */}
      <div className='p-4 bg-[#121212]  rounded-xl lg:h-[62.5vh] md:h-full'>
        <ul className='flex items-center justify-between'>
          <li className='lg:flex items-center gap-5 md:hidden '>
            <img src={collapse} alt='collapse' />
            Your Library
          </li>

          <img src={plus} alt='plus' className='w-6 md:ml-2 ' />
        </ul>

        <div className='bg-[#1f1f1f] p-4 mt-10 flex flex-col items-start gap-2 rounded-lg md:hidden lg:block'>
          <h2 className='text-xl text-slate-100'>Create your first playlist</h2>
          <h3>It's easy, we'll help you</h3>
          <Button className='rounded-full bg-slate-50 mt-3 text-black mb-2 hover:text-slate-50'>
            Create playlist
          </Button>
        </div>
        <div className='flex flex-wrap gap-x-5 mt-2 p-2 md:hidden'>
          {textItems.map((item) => (
            <h4 className='text-gray-500' key={item.text}>
              {item.text}
            </h4>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default LeftSidebar;
