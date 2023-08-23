"use client";

import InfoMoviesList from "@/components/InfoMoviesList";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode, useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
type TypeList =
  | "comingsoonmovies"
  | "topratedmovies"
  | "mostpopularmovies"
  | "mostpopulartvshows";

export default function PopoverChooseTypeMovieList({
  children,
}: {
  children?: ReactNode;
}) {
  const [typeList, setTypeList] = useState<TypeList>("comingsoonmovies");

  return (
    <div>
      <div>
        <Popover>
          <PopoverTrigger className="border border-black dark:border-white p-2 rounded-lg flex gap-3 items-center w-60 justify-between">
            {typeList == "comingsoonmovies"
              ? "Coming Soon Movies"
              : typeList == "topratedmovies"
              ? "Top Rated Movies"
              : typeList == "mostpopularmovies"
              ? "Most Popular Movies"
              : " Most Popular TV Shows"}
            <AiOutlineCaretDown />
          </PopoverTrigger>
          <PopoverContent className="w-full mt-1">
            <ul className="flex flex-col">
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeList("comingsoonmovies")}
              >
                Coming Soon Movies
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeList("topratedmovies")}
              >
                Top Rated Movies
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeList("mostpopularmovies")}
              >
                Most Popular Movies
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeList("mostpopulartvshows")}
              >
                Most Popular TV Shows
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
      {children}
    </div>
  );
}
