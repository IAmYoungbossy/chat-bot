"use client";

import { useEffect, useRef } from "react";

export function useScrollbarVisibility() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      scrollContainer.classList.add("scrolling");
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        scrollContainer.classList.remove("scrolling");
      }, 1500);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return scrollRef;
}
