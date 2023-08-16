"use server"

import { getInfoMovie } from "@/api/NewApi/getInfoMovie";


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