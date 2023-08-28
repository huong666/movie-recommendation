"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import MoviesGrid from "../MoviesRender/MoviesGrid";
import { handleGenreMoviesList, handleRecommendMovies } from "@/lib/serverFun";

type TypeList =
  | "comingsoonmovies"
  | "topratedmovies"
  | "mostpopularmovies"
  | "mostpopulartvshows";

type TypeGenreList =
  | "action"
  | "horror"
  | "popular"
  | "adventure"
  | "comedy"
  | "animation"
  | "biography"
  | "crime"
  | "romance";

export default function InfoMoviesList({
  handleMovieList,
}: {
  handleMovieList: (typeList: TypeList) => void;
}) {
  const [typeList, setTypeList] = useState<TypeList>("mostpopulartvshows");
  const [typeGenreList, setTypeGenreList] = useState<TypeGenreList>("action");
  const [infoMovies, setInfoMovies] = useState<any[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getMovieList(typeList: TypeList) {
    const data: any = await handleMovieList(typeList);
    setInfoMovies(data);
  }

  async function handleGetGenreMoviesData(typeList: TypeGenreList) {
    setInfoMovies(undefined);
    const data = await handleGenreMoviesList(typeList);
    setInfoMovies(data);
  }

  useEffect(() => {
    setIsLoading(true);
    setInfoMovies(undefined);
    getMovieList(typeList);
    setIsLoading(false);
  }, [typeList]);

  // async function handleGetRecommendMovies(idMovie: string) {
  //   setInfoMovies(undefined);
  //   const data = await handleRecommendMovies(idMovie);
  //   setInfoMovies(data);
  // }

  useEffect(() => {
    handleGetGenreMoviesData(typeGenreList);
  }, [typeGenreList]);

  return (
    <section>
      <div className="flex gap-5">
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
        <Popover>
          <PopoverTrigger className="border border-black dark:border-white p-2 rounded-lg flex gap-3 items-center w-60 justify-between">
            {typeGenreList == "action"
              ? "Action"
              : typeGenreList == "horror"
              ? "Horror"
              : typeGenreList == "popular"
              ? "Popular"
              : typeGenreList == "adventure"
              ? "Adventure"
              : typeGenreList == "comedy"
              ? "Comedy"
              : typeGenreList == "animation"
              ? "Animation"
              : typeGenreList == "biography"
              ? "Biography"
              : typeGenreList == "crime"
              ? "Crime"
              : "Romance"}
            <AiOutlineCaretDown />
          </PopoverTrigger>
          <PopoverContent className="w-full mt-1">
            <ul className="flex flex-col">
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("action")}
              >
                Action
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("horror")}
              >
                Horror
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("popular")}
              >
                Popular
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("adventure")}
              >
                Adventure
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("comedy")}
              >
                Comedy
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("animation")}
              >
                Animation
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("biography")}
              >
                Biography
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("crime")}
              >
                Crime
              </li>
              <li
                className="hover:bg-slate-200 dark:hover:bg-slate-800 py-2 px-3 cursor-pointer"
                onClick={() => setTypeGenreList("romance")}
              >
                Romance
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>
      <hr className="my-5 border-black dark:border-white" />
      <MoviesGrid isLoading={isLoading} infoMovies={infoMovies} />
    </section>
  );
}
