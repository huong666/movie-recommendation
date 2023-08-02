import Image from "next/image";
import Link from "next/link";

const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_Host;

//Rating
export async function ratingMovies(idMovie: string) {
  const url =
    "https://imdb8.p.rapidapi.com/title/get-ratings?tconst=" + idMovie;
  // + idMovie;
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
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

// movie image
async function movieImage(idMovie: string) {
  const url = "https://imdb8.p.rapidapi.com/title/find?q=" + idMovie;
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

export default async function Movie({ idMovieList }: { idMovieList: string }) {
  const idMovie = idMovieList.slice(7, idMovieList.length - 1);
  //   console.log(idMovie);

  // call Rating
  const movieRate = await ratingMovies(idMovie);
  const percentRating = Math.round((movieRate.rating / 10) * 100);
  //   console.log(movieRate);

  // // call Image
  const dataImg = await movieImage(idMovie);
  const image = dataImg.results[0].image.url;
  //   const image = "/sri.jpg";
  // console.log(dataImg.results);

  return (
    <Link href={`/${idMovie}`} className="opacity-90 hover:opacity-100">
      <Image
        src={image}
        alt="Movie img"
        width={180}
        height={260}
        className="rounded-lg h-[260px]"
      />
      <div className="py-3">
        <p>{`${movieRate.canRate ? percentRating + "%" : "---"}`}</p>
        <p>{movieRate.title}</p>
      </div>
    </Link>
  );
}
