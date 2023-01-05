import React, { FC, ReactNode, useEffect, useState } from "react";

/* Layout */
import SEO from "layout/SEO";
import { ScrollTop } from "layout/ScrollTop";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 99) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll);
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <SEO />
      {children}
      <ScrollTop active={scrollActive} />
    </>
  );
};

export default Layout;
