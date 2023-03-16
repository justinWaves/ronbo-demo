import React from "react";

function LandingPage() {
  return (
    <div className="h-screen w-screen">
      <img src="main-page.jpg" alt="" className="w-screen absolute z-0 top-0" />
      <div className=" z-10 relative md:top-1/3 lg:top-4/6 xl:top-1/2 top-0 text-center  text-white  ">
<p className="text-xs font-light">INTRODUCING</p>
        <h1 className="text-5xl font-sans font-thin">Ultra Series</h1>
        <p className="text-xs font-light mt-2 underline cursor-pointer">EXPLORE THE COLLECTION</p>
      </div>
    </div>
  );
}

export default LandingPage;
