import React, { useEffect } from "react";
import { preLoaderAnim } from "./index";

const PreLoader = () => {
  
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader bg-[#0009] backdrop-blur-lg">
      <div className="texts-container flex justify-center items-center h-[60px] text-[15pt] md:text-[20pt] font-bold overflow-hidden text-white uppercase">
        <span className="px-4">Hodl.</span>
        <span className="px-4">Transact.</span>
        <span className="px-4">Scale.</span>
      </div>
    </div>
  );
};

export default PreLoader;