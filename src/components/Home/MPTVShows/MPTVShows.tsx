import Link from "next/link";
import { Slide, SlideChild } from "@/components/ReactSlice";
import Movie from "@/components/Movie";

const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_Host;

//Most Popular TV Show
export async function popTVMovies() {
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

export default async function MPTVShows() {
  const popTVMoviesList = await popTVMovies();
  const moviesList = popTVMoviesList?.slice(0, 12);
  return (
    <article className="px-5">
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">MOST POPULAR TV SHOWS</h1>
        <Link href="#" className="font-medium text-sm">
          VIEW ALL
        </Link>
      </div>
      <div className="flex gap-5 p-1">
        <Slide
          options={{
            start: 1,
            width: "100%",
            gap: "1rem",
            perPage: 6,
          }}
          aria-label="..."
        >
          {moviesList.map((item: any, index: number) => {
            return (
              <SlideChild key={index}>
                {/* @ts-expect-error Async Server Component */}
                <Movie idMovieList={item} />
              </SlideChild>
            );
          })}
        </Slide>
      </div>
    </article>
  );
}
