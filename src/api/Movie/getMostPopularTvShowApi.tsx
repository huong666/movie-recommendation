const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_Host;

//Most Popular TV Show
export async function GetMostPopTvShowApi() {
  const url =
    "https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows?homeCountry=US&purchaseCountry=US&currentCountry=US";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": rapidApiHost,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
