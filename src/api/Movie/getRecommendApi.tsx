import { cookies } from "next/dist/client/components/headers";

const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_HOST;

//Recommend Movies
export async function GetRecommendApi(idMovie: string) {
  const url = `https://imdb8.p.rapidapi.com/title/get-more-like-this?tconst=${idMovie}&currentCountry=US&purchaseCountry=US`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": rapidApiHost,
    },
  };

  try {
    if (idMovie == "") {
      return;
    }
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
