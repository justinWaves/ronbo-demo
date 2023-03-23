import React from "react";

function LandingPage() {
  return (
    <div className="h-screen w-screen ">
     
      <div className=" z-10 absolute text-center  text-white bottom-20 mx-auto left-0 right-0 group cursor-pointer">
<p className="text-xs font-light">INTRODUCING</p>
        <h1 className="text-5xl font-sans font-thin">Ultra Series</h1>
        <p className="text-xs  group-hover:text-sm font-light mt-2 underline cursor-pointer transition-all duration-500">EXPLORE THE COLLECTION</p>
      </div>
       <img src="main-page.jpg" alt="" className=" w-full  h-screen relative z-0 top-0 object-cover" />
    </div>
  );
}

export default LandingPage;
