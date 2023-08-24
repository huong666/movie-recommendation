"use server"

import { GetComingSoonMoviesApi, GetMostPopTvShowApi, GetPopMoviesApi, GetTopRatedMoviesApi } from "@/api/Movie";
import { getInfoMovie } from "@/api/NewApi/getInfoMovie";
import { getMoviesSearchApi } from "@/api/NewApi/getMovieSearchApi";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type TypeList =
  | "comingsoonmovies"
  | "topratedmovies"
  | "mostpopularmovies"
  | "mostpopulartvshows";

export async function handleMovie(params: any) {
  
    const id = params.slice(7, params.length - 1);
  
    try {
      const res = await getInfoMovie(id);
      // console.log("fetch data o MPMovie", res);
      return res;
    } catch (error) {
      console.log("error", error);
      return undefined;
    }
  }


export async function handleSearchMovies(params: string) {
    try {
      const res = await getMoviesSearchApi(params)
      return res;
    } catch (error) {
      console.log(error)
      return undefined
    }
  }

export async function handleMovieList(typeList : TypeList){
  try {
    const moviesList =
      typeList == "comingsoonmovies"
        ? await GetComingSoonMoviesApi()
        : typeList == "mostpopulartvshows"
        ? await GetMostPopTvShowApi()
        : typeList == "topratedmovies"
        ? await GetTopRatedMoviesApi()
        : await GetPopMoviesApi();
    return moviesList;
  } catch (error) {
    console.log("error in handleMovieList", error);
  }
}


export async function handleCookie(title:string) {
  cookies().set("recently-movie", title)
}
