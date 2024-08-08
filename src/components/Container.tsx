import React from "react";

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className='w-[1528px] bg-black h-[742px] mx-auto  p-2 text-white flex  overflow-hidden '>
      {children}
    </div>
  );
}

export default Container;
