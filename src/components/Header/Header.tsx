"use client";

import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [stickyMenu, setstickyMenu] = useState<boolean | null>(null);
  const [mode, setMode] = useState<string>("light");
  const [y, setY] = useState<number>(0);
  const [navigationOpen, setnavigationOpen] = useState<boolean>(false);

  const onMode = () => {
    mode == "light" ? setMode("dark") : setMode("light");
    localStorage.setItem("Dark Mode", mode == "light" ? "dark" : "light");
  };

  const handleNavigation = useCallback(() => {
    setY(window.scrollY);
  }, [y]);

  const handleNavigationOpen = () => {
    setnavigationOpen(!navigationOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    if (y > 20) {
      setstickyMenu(true);
    } else {
      setstickyMenu(false);
    }
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    const themeStorage = localStorage?.getItem("Dark Mode");
    // console.log("Store darkMode", localStorage?.getItem("Dark Mode"));
    if (themeStorage !== null) {
      setMode(themeStorage);
    }
  }, []);

  useEffect(() => {
    mode == "dark"
      ? document.getElementsByTagName("html")[0].classList.add("dark")
      : document.getElementsByTagName("html")[0].classList.remove("dark");
  }, [mode]);

  return (
    <header
      className={` ${
        stickyMenu &&
        "fixed left-0 right-0 shadow-md shadow-slate-100 dark:shadow-slate-900 py-7"
      } flex py-5 px-10`}
    >
      <div className="w-1/3">
        <Image
          priority
          src="/logo/logo-light.svg"
          alt="Logo"
          width={120}
          height={25}
          className="dark:hidden"
        />
        <Image
          priority
          src="/logo/logo-dark.svg"
          alt="Logo"
          width={120}
          height={25}
          className="hidden dark:block"
        />
      </div>
      <div className="flex justify-between w-2/3">
        <nav className="" id="Choose Type List">
          <ul className="flex gap-10 font-medium">
            <li className="cursor-pointer">Movies Awards</li>
            <li className="cursor-pointer">Most Popular Movies</li>
            <li className="cursor-pointer">Most Popular TV Shows</li>
            <li className="cursor-pointer">Coming Soon Movies</li>
          </ul>
        </nav>
        <div className="flex items-center">
          <Switch
            id="setDarkMode"
            onClick={onMode}
            checked={mode == "dark" ? true : false}
          />
          <label htmlFor="setDarkMode" className="ml-3 font-medium">
            <Image
              priority
              src="/icons/icon-sun.svg"
              alt="Sun Icon"
              width={23}
              height={23}
              className="dark:hidden"
            />
            <Image
              priority
              src="/icons/icon-moon.svg"
              alt="Moon Icon"
              width={23}
              height={23}
              className="dark:block hidden"
            />
          </label>
        </div>
      </div>
    </header>
  );
}
