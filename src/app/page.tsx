import {
  GetComingSoonMoviesApi,
  GetMostPopTvShowApi,
  GetPopMoviesApi,
  GetTopRatedMoviesApi,
} from "@/api/Movie";
import { getMoviesSearchApi } from "@/api/NewApi/getMovieSearchApi";
import {
  ComingSoonMovies,
  TopRatedMovies,
  MPTVShows,
  MPMovies,
} from "@/components/Home";

const data = [
  "/title/tt15398776/",
  "/title/tt1517268/",
  "/title/tt6791350/",
  "/title/tt9224104/",
  "/title/tt8589698/",
  "/title/tt10638522/",
  "/title/tt13603966/",
  "/title/tt9362722/",
  "/title/tt10172266/",
  "/title/tt15671028/",
  "/title/tt9603212/",
  "/title/tt6718170/",
  // "/title/tt7599146/",
  // "/title/tt1001520/",
  // "/title/tt21291992/",
  // "/title/tt4779682/",
  // "/title/tt4495098/",
];

export default async function Home() {
  const mostPopMoviesList = await GetPopMoviesApi();
  const mostPopTvShowList = await GetMostPopTvShowApi();
  const topMovieRatedList = await GetTopRatedMoviesApi();
  const comingSoonMoviesList = await GetComingSoonMoviesApi();
  // const searchMovie = await getMoviesSearchApi();
  // console.log("comingSoonMoviesList", comingSoonMoviesList);

  return (
    <main className="min-h-screen py-20 px-20 pt-28">
      <section className="flex flex-col justify-center items-center gap-5 mb-10">
        <MPMovies moviesList={mostPopMoviesList.slice(0, 12)} />
        <MPTVShows moviesList={mostPopTvShowList.slice(0, 12)} />
      </section>
      <section className="grid grid-cols-2 gap-5">
        <div className="col-span-1 ">
          <TopRatedMovies moviesList={topMovieRatedList.slice(0, 10)} />
        </div>
        <div className="col-span-1">
          <ComingSoonMovies moviesList={comingSoonMoviesList.slice(0, 10)} />
        </div>
      </section>
    </main>
  );
}
