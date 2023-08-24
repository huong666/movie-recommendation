"use client";

import { handleGenreMoviesList, handleRecommendMovies } from "@/lib/serverFun";
import { useEffect, useState } from "react";
import { MovieGrid } from "../MoviesRender";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AiOutlineCaretDown } from "react-icons/ai";

type TypeGenreList =
  | "action"
  | "horror"
  | "popular"
  | "adventure"
  | "comedy"
  | "animation"
  | "biography"
  | "crime"
  | "romance"
  | "recommend";

export default function RecomendationMoviesCom() {
  const [infoMovies, setInfoMovies] = useState(undefined);
  const [storeLocal, setStoreLocal] = useState<boolean>(false);
  const [typeList, setTypeList] = useState<TypeGenreList>("recommend");

  async function handleGetRecommendMovies(idMovie: string) {
    setInfoMovies(undefined);
    const data = await handleRecommendMovies(idMovie);
    setInfoMovies(data);
  }

  async function handleGetGenreMoviesData(typeList: TypeGenreList) {
    setInfoMovies(undefined);
    const data = await handleGenreMoviesList(typeList);
    setInfoMovies(data);
  }

  useEffect(() => {
    if (typeList == "recommend") {
      const storeItem = localStorage.getItem("recently-movie");
      if (storeItem === null) {
        setStoreLocal(true);
      } else {
        setStoreLocal(false);
        handleGetRecommendMovies(storeItem);
      }
    } else {
      handleGetGenreMoviesData(typeList);
    }
  }, [typeList]);

  return (
    <section className="py-5 2xl:px-56 xl:px-36 lg:px-12 px-4">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <h1 className="md:text-xl text-base font-medium">
            RECOMMEND MOVIES THAT YOU MIND BE LIKED
          </h1>
          <Popover>
            <PopoverTrigger className="border border-black dark:border-white p-2 rounded-lg flex gap-3 items-center w-60 justify-between">
              {typeList == "action"
                ? "Action"
                : typeList == "horror"
                ? "Horror"
                : typeList == "popular"
                ? "Popular"
                : typeList == "adventure"
                ? "Adventure"
                : typeList == "comedy"
                ? "Comedy"
                : typeList == "animation"
                ? "Animation"
                : typeList == "biography"
                ? "Biography"
                : typeList == "crime"
                ? "Crime"
                : typeList == "recommend"
                ? "Recommend"
                : "Romance"}
              <AiOutlineCaretDown />
            </PopoverTrigger>
            <PopoverContent className="w-full mt-1">
              <ul className="flex flex-col">
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("recommend")}
                >
                  Recommend
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("action")}
                >
                  Action
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("horror")}
                >
                  Horror
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("popular")}
                >
                  Popular
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("adventure")}
                >
                  Adventure
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("comedy")}
                >
                  Comedy
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("animation")}
                >
                  Animation
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("biography")}
                >
                  Biography
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("crime")}
                >
                  Crime
                </li>
                <li
                  className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                  onClick={() => setTypeList("romance")}
                >
                  Romance
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        <div className="min-h-screen">
          {/* {storeLocal == true ? (
            "We dont have enough data to recommend"
          ) : infoMovies == undefined ? (
            "Loading"
          ) : (
            <MovieGrid infoMovies={infoMovies} />
          )} */}
          {typeList == "recommend" &&
            (storeLocal == true ? (
              "We dont have enough data to recommend"
            ) : (
              <MovieGrid infoMovies={infoMovies} />
            ))}
          {typeList !== "recommend" &&
            (infoMovies == undefined ? (
              "Loading"
            ) : (
              <MovieGrid infoMovies={infoMovies} />
            ))}
        </div>
      </div>
    </section>
  );
}
