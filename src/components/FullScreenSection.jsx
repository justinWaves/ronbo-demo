import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import SectionHeader from "./SectionHeader";


function FullScreenSection({ title, image, subHeader }) {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const offsetTop = ref.current.offsetTop;
    const height = window.innerHeight;
    const scrollTop = window.scrollY;
    const delta = scrollTop - offsetTop;
    const clampDelta = Math.max(0, Math.min(delta, height));
    set({ offset: clampDelta });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transform = offset.interpolate((o) => `translateY(-${o}px)`);

  return (
    <animated.section
      ref={ref}
      className="h-screen w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        transform,
      }}
    >
      <div className="cursor-pointer group text-center ">
      <SectionHeader >{title} </SectionHeader >
      <p className="text-md font-thin text-white group-hover:underline group-hover:text-lg transition-all duration-500">{subHeader}</p>
      </div>

    </animated.section>
  );
}

export default FullScreenSection;