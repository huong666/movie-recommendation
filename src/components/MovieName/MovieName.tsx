const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_Host;

export async function movieName(id: string) {
  const url = "https://imdb8.p.rapidapi.com/title/find?q=" + id;
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

export default async function MovieName({ id }: { id: string }) {
  const name = await movieName(id);
  //   console.log(name.results[0].title);
  return <>{name.results[0].title}</>;
}
