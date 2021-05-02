import { useState, useEffect } from "react";

export const WindowEditor = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const Resize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", Resize);
    return () => window.removeEventListener("resize", Resize);
  }, []);

  return [windowSize.width, windowSize.height];
};
