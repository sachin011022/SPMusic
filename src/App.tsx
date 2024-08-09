import { Route, Routes } from "react-router-dom";

import Container from "./components/Container";
import { Toaster } from "@/components/ui/toaster";
import LeftSidebar from "./components/LeftSidebar";
import RightMiddle from "./components/RightMiddle";
import Navbar from "./components/Navbar";

import SearchPage from "./pages/SearchPage";
import Album from "./pages/Album";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <Container>
        <div className='flex flex-col w-full h-full gap-2'>
          <div className='flex items-center gap-2'>
            <div className='md:w-[78px] lg:w-[351px] hidden md:block lg:block h-full'>
              <LeftSidebar />
            </div>
            <div className='flex flex-col gap-1'>
              <div className='w-full'>
                <Navbar />
              </div>
              <div className='lg:w-[156vh] sm:w-[50vh] md:w-[67vh]  rounded-lg h-full'>
                <Routes>
                  <Route path='/' element={<RightMiddle />} />
                  <Route path='/search' element={<SearchPage />} />
                  <Route path='/:value/:id' element={<Album />} />
                </Routes>
              </div>
            </div>
          </div>
          <div>
            <div className='fixed bottom-2 h-[85px]  w-[390px] md:w-[98vw] lg:w-[98.7vw] rounded-lg overflow-hidden pr-2'>
              <footer className='h-full'>
                <MusicPlayer />
              </footer>
            </div>
          </div>
        </div>

        <Toaster />
      </Container>
    </div>
  );
}

export default App;
