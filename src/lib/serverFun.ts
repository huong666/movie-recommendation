"use server"

import { getInfoMovie } from "@/api/NewApi/getInfoMovie";
import { getMoviesSearchApi } from "@/api/NewApi/getMovieSearchApi";
import { redirect } from "next/navigation";


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