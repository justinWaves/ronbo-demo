import React from "react";

function LandingPage() {
  return (
    <div className="h-screen w-screen ">
      <img src="main-page.jpg" alt="" className=" w-full  h-screen absolute z-0 top-0 object-cover" />
      <div className=" z-10 relative text-center  text-white top-2/3 group cursor-pointer">
<p className="text-xs font-light">INTRODUCING</p>
        <h1 className="text-5xl font-sans font-thin">Ultra Series</h1>
        <p className="text-xs  group-hover:text-sm font-light mt-2 underline cursor-pointer transition-all duration-500">EXPLORE THE COLLECTION</p>
      </div>
    </div>
  );
}

export default LandingPage;
