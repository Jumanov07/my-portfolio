"use client";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursorLight = document.createElement("div");

    cursorLight.classList.add("cursor");
    document.body.appendChild(cursorLight);

    const handleMouseMove = (e: MouseEvent) => {
      cursorLight.style.background = `radial-gradient(circle 600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursorLight);
    };
  }, []);

  return null;
};

export default Cursor;
