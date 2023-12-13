'use client'


import { cloneElement, useEffect, useRef } from "react";

export default function Hover({ children }) {
  const ref = useRef();

  useEffect(() => {
    const toggleCursor = () =>
      document.querySelector("#cursor").classList.toggle("active");

    ref.current.addEventListener("mouseenter", toggleCursor);
    ref.current.addEventListener("mouseleave", toggleCursor);
  });

  return cloneElement(children, { ref });
}
