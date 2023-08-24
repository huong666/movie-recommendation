import {
  GetComingSoonMoviesApi,
  GetMostPopTvShowApi,
  GetPopMoviesApi,
  GetRecommendApi,
  GetTopRatedMoviesApi,
} from "@/api/Movie";
import { getMoviesSearchApi } from "@/api/NewApi/getMovieSearchApi";
import {
  ComingSoonMovies,
  TopRatedMovies,
  MPTVShows,
  MPMovies,
} from "@/components/Home";
import dynamic from "next/dynamic";

// const LazyComingSoonMovies = dynamic(
//   () => import("@/components/Home/ComingSoonMovies")
// );
// const LazyTopRatedMovies = dynamic(
//   () => import("@/components/Home/TopRatedMovies")
// );
// const LazyMPTVShows = dynamic(() => import("@/components/Home/MPTVShows"));
// const LazyMPMovies = dynamic(() => import("@/components/Home/MPMovies"));

export default async function Home() {
  const mostPopMoviesList = await GetPopMoviesApi();
  const mostPopTvShowList = await GetMostPopTvShowApi();
  const topMovieRatedList = await GetTopRatedMoviesApi();
  const comingSoonMoviesList = await GetComingSoonMoviesApi();

  return (
    <main className="min-h-screen py-20 2xl:px-52 xl:px-32 lg:px-8 px-0 pt-28">
      <section className="flex flex-col justify-center items-center gap-5 mb-10">
        <MPMovies moviesList={mostPopMoviesList.slice(0, 12)} />
        <MPTVShows moviesList={mostPopTvShowList.slice(0, 12)} />
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-5">
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
