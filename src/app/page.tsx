import { GetPopMoviesApi } from "@/api/Movie";
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
];

export default async function Home() {
  const mostPopMoviesList = await GetPopMoviesApi();

  return (
    <main className="min-h-screen py-20 px-20 pt-28">
      <section className="flex flex-col justify-center items-center gap-5 mb-10">
        <MPMovies moviesList={mostPopMoviesList.slice(0, 12)} />
        {/* <MPTVShows /> */}
      </section>
      <section className="grid grid-cols-2 gap-5">
        <div className="col-span-1 ">{/* <TopRatedMovies /> */}</div>
        <div className="col-span-1">{/* <ComingSoonMovies /> */}</div>
      </section>
    </main>
  );
}
