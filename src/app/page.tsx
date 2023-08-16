import { GetPopMoviesApi } from "@/api/Movie";
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
  // "/title/tt1695843/",
  // "/title/tt15509244/",
  // "/title/tt5090568/",
  // "/title/tt21308888/",
  // "/title/tt6879446/",
  // "/title/tt14230388/",
  // "/title/tt10640346/",
  // "/title/tt13405778/",
  // "/title/tt5971474/",
  // "/title/tt0439572/",
];

export default async function Home() {
  // const mostPopMoviesList = await GetPopMoviesApi();
  // const searchMovie = await getMoviesSearchApi();
  // console.log(mostPopMoviesList);

  return (
    <main className="min-h-screen py-20 px-20 pt-28">
      <section className="flex flex-col justify-center items-center gap-5 mb-10">
        <MPMovies moviesList={data} />
        <MPTVShows />
      </section>
      <section className="grid grid-cols-2 gap-5">
        <div className="col-span-1 ">{/* <TopRatedMovies /> */}</div>
        <div className="col-span-1">{/* <ComingSoonMovies /> */}</div>
      </section>
    </main>
  );
}
