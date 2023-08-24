"use server"

import { GetComingSoonMoviesApi, GetMostPopTvShowApi, GetPopMoviesApi, GetRecommendApi, GetTopRatedMoviesApi } from "@/api/Movie";
import { GetPopMoviesByGenreApi } from "@/api/Movie/getPopMoviesByGenreApi";
import { getInfoMovie } from "@/api/NewApi/getInfoMovie";
import { getMoviesSearchApi } from "@/api/NewApi/getMovieSearchApi";
import { redirect } from "next/navigation";

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
  | "romance"
  | "recommend";

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

export async function handleGenreMoviesList(TypeGenreList:TypeGenreList) {
  try {
    const moviesList = await GetPopMoviesByGenreApi(TypeGenreList)
    return moviesList
  } catch (error) {
    console.log(error)
    return undefined
  }
}


export async function handleRecommendMovies(idMovie: string){
  const infoMovies = await GetRecommendApi(idMovie);
  return infoMovies
}