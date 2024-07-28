import React, { useState, useEffect } from "react";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 450);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
