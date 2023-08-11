import {
  ComingSoonMovies,
  TopRatedMovies,
  MPTVShows,
  MPMovies,
} from "@/components/Home";

export default async function Home() {
  // const popMoviesList = await popMoviesApi();
  // const popMovie = popMoviesList;
  // // const ratingApi = await ratingMoviesApi(popMovie);

  // console.log("ratingApi", popMovie);
  // console.log("popMoviesList", popMoviesList);

  return (
    <main className="min-h-screen py-20 px-20 pt-28">
      <section className="flex flex-col justify-center items-center gap-5 mb-10">
        {/* <MPMovies moviesList={popMoviesList.slice(0, 12)} /> */}
        {/* <MPTVShows /> */}
      </section>
      <section className="grid grid-cols-2 gap-5">
        <div className="col-span-1 ">{/* <TopRatedMovies /> */}</div>
        <div className="col-span-1">{/* <ComingSoonMovies /> */}</div>
      </section>
    </main>
  );
}
