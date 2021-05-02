import { useState, useEffect, useRef } from "react";
import { WindowEditor } from "./WindowEditor";

export const useDragging = (openMenu) => {
  const [width, height] = WindowEditor();
  const [isDragging, setIsDragging] = useState(false);
  const [mobileTouch, setMobileTouch] = useState(false);
  const [pos, setPos] = useState({ x: width - 200, y: height - 200 });
  const ref = useRef(null);

  const onMouseUp = (e) => {
    setIsDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    if (width || height) {
      setPos({
        x: width - 200,
        y: height - 200,
      });
    }
  }, [width, height]);

  useEffect(() => {
    window.addEventListener("touchstart", () => {
      setMobileTouch(true);
    });

    return () => {
      window.removeEventListener("touchstart", () => {
        setMobileTouch(false);
      });
    };
  }, []);

  useEffect(() => {
    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      setIsDragging(true);
      setPos({
        x: e.x - ref.current.offsetWidth / 2,
        y: e.y - ref.current.offsetHeight / 2,
      });
      e.stopPropagation();
      e.preventDefault();
    };

    ref.current.addEventListener("mousedown", onMouseDown);
    window.addEventListener("touchstart", onMouseDown);
    const Test = () => {
      ref.current.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("touchstart", onMouseDown);
    };
    return () => Test();
  }, [openMenu]);

  useEffect(() => {
    const onMouseMove = (e) => {
      const Center = ref.current.offsetWidth / 2;

      const MobileTouchX = mobileTouch && e.changedTouches[0].clientX - Center;
      const MobileTouchY = mobileTouch && e.changedTouches[0].clientY - Center;
      const PcTouchX = e.x - Center;
      const PcTouchY = e.y - Center;

      setPos({
        x: isDragging && !mobileTouch ? PcTouchX : MobileTouchX,
        y: isDragging && !mobileTouch ? PcTouchY : MobileTouchY,
      });
      if (!isDragging) return;
      e.stopPropagation();
      e.preventDefault();
    };

    if (mobileTouch) {
      window.addEventListener("touchmove", onMouseMove);
    } else {
      window.removeEventListener("touchmove", onMouseMove);
    }

    if (isDragging) {
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    } else {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }

    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onMouseMove);
    };
  }, [isDragging, mobileTouch]);

  return [ref, pos.x, pos.y, width, height];
};
