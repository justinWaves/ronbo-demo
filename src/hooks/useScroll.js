import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const onScroll = () => {
    const newScrollTop = window.scrollY;
    setScrollTop(newScrollTop);
  };

  useEffect(() => {
    const onResize = () => {
      setScrollHeight(document.body.scrollHeight);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNextSection = () => {
    const snapHeight = Math.ceil(clientHeight);
    const newPosition = Math.ceil(scrollTop / snapHeight) * snapHeight;
    window.scrollTo({ top: newPosition, behavior: "smooth" });
  };

  const scrollToPrevSection = () => {
    const snapHeight = Math.ceil(clientHeight);
    const newPosition = Math.floor(scrollTop / snapHeight) * snapHeight;
    window.scrollTo({ top: newPosition, behavior: "smooth" });
  };

  return { scrollTop, scrollHeight, clientHeight, scrollToTop, scrollToNextSection, scrollToPrevSection };
};

export default useScroll;
