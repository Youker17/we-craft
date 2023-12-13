"use client";

import React, { useState, useEffect } from "react";
import "./style.css"

const FlareCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const flareSize = isPointer ? 0 : 30;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    

    <div
        id="cursor"
        style={{
          ...cursorStyle,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${flareSize}px`,
          height: `${flareSize}px`,
        }}
        className={"grid place-items-center absolute z-[99999] bg-neutral-900 bg-opacity-50" + `flare ${isPointer ? "pointer" : ""}`}
      >
        <div className="w-2 absolute bg-white h-px top-0 left-0"></div>
        <div className="w-2 absolute bg-white h-px top-0 right-0"></div>
        <div className="w-2 absolute bg-white h-px bottom-0 left-0"></div>
        <div className="w-2 absolute bg-white h-px bottom-0 right-0"></div>

        <div className="w-px absolute bg-white h-2 top-0 left-0"></div>
        <div className="w-px absolute bg-white h-2 top-0 right-0"></div>
        <div className="w-px absolute bg-white h-2 bottom-0 left-0"></div>
        <div className="w-px absolute bg-white h-2 bottom-0 right-0"></div>

        <div  className="w-10 h-10 grid place-items-center absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3 fill-white text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </div>

        <div className="bg box-border absolute left-0 top-0 h-full w-full bg-neutral-900/70 overflow-hidden"></div>
      </div>

  );
};

export default FlareCursor;