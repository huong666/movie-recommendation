"use client";

import { Switch } from "@/components/ui/switch";
import { handleSearchMovies } from "@/lib/serverFun";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const [stickyMenu, setstickyMenu] = useState<boolean | null>(null);
  const [mode, setMode] = useState<string>("light");
  const [y, setY] = useState<number>(0);
  const [navigationOpen, setnavigationOpen] = useState<boolean>(false);
  const [onSubmit, setOnSubmit] = useState<string>("");

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
    if (y > 10) {
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
      className={`fixed left-0 right-0 mx-auto flex flex-row justify-between py-5 px-20 transition-all duration-300 ease-linear ${
        stickyMenu &&
        "shadow-md shadow-slate-100 dark:shadow-slate-900 z-10 bg-white dark:bg-slate-900"
      }`}
    >
      <div className="w-1/2 flex flex-row justify-between items-center">
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
      <div className="flex justify-between w-1/2">
        <nav className="" id="Choose Type List">
          <ul className="flex gap-10 font-medium h-full">
            <li className="cursor-pointer my-auto">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer my-auto">
              <Link href="/actor">News</Link>
            </li>
            <li className="cursor-pointer my-auto">
              <Link href="/info">Info Movie</Link>
            </li>
            {/* <li className="cursor-pointer">Most Popular TV Shows</li>
            <li className="cursor-pointer">Coming Soon Movies</li> */}
          </ul>
        </nav>
        <div className="mr-10 relative flex items-center">
          <form
            onSubmit={() => {
              handleSearchMovies(onSubmit);
            }}
            action={"/find"}
          >
            <input
              type="text"
              name="SearchMovie"
              id="SearchBar"
              className="px-3 py-1 border text-black border-black dark:border-white rounded-full"
              placeholder="Search Movie..."
              onChange={(e) => {
                setOnSubmit(e.target.value);
              }}
            />
            <button type="submit">
              <AiOutlineSearch className="absolute z-20 right-2 top-1 w-6 h-6 dark:text-black cursor-pointer" />
            </button>
          </form>
        </div>

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
