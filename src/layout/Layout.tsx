import React, { FC, ReactNode, useEffect, useState } from "react";

/* Layout */
import { SEO, ScrollTop, Sidebar, InnerLayout, Header } from "layout";

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
      <div className="relative flex w-screen h-screen">
        <Sidebar />
        <div className="max-w-[calc(100vw-288px)]">
          <Header />
          <InnerLayout node={children} />
          <ScrollTop active={scrollActive} />
        </div>
      </div>
    </>
  );
};

export default Layout;
