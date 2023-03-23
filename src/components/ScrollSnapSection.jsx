import React from "react";
import kitchenImg from '../images/kitchen.jpg'
import bathImg from '../images/bath.jpg'
import closetImg from '../images/closet.jpg'
import SectionHeader from "./SectionHeader";
import SectionSubHeader from "./SectionSubHeader";

function ScrollSnapSection() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory ">
          {/* Kitchen Screen */}
          <div className="h-screen flex flex-col justify-center items-center snap-center bg-cover bg-center" style={{backgroundImage: `url(${kitchenImg})`}}>
            <SectionHeader >Kitchen</SectionHeader>
            <SectionSubHeader >EXPLORE THE KITCHEN COLLECTION</SectionSubHeader>
          </div>
          
          {/* Bath Screen */}
          <div className="h-screen flex flex-col justify-center items-center snap-center bg-cover bg-center" style={{backgroundImage: `url(${bathImg})`}}>
          <SectionHeader >Bath</SectionHeader>
          <SectionSubHeader >EXPLORE THE BATH COLLECTION</SectionSubHeader>
          </div>
          
          {/* Closet Screen */}
          <div className="h-screen flex flex-col justify-center items-center snap-center bg-cover bg-center" style={{backgroundImage: `url(${closetImg})`}}>
          <SectionHeader >Closet</SectionHeader>
          <SectionSubHeader >EXPLORE THE CLOSET COLLECTION</SectionSubHeader>
          </div>
        </div>
      );
    }

export default ScrollSnapSection;
