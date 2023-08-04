import {
  ComingSoonMovies,
  TopRatedMovies,
  MPTVShows,
  MPMovies,
} from "@/components/Home";

export default function Home() {
  // // const data = await getData();

  return (
    <main className="min-h-screen py-20 px-20 pt-28">
      <section className="flex flex-col justify-center items-center gap-5">
        {/* <MPMovies /> */}
        {/* <MPTVShows /> */}
      </section>
      <section className="grid grid-cols-2 gap-5">
        <div className="col-span-1 ">{/* <TopRatedMovies /> */}</div>
        <div className="col-span-1">
          <ComingSoonMovies />
        </div>
      </section>
    </main>
  );
}
