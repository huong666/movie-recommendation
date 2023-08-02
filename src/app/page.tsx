import {
  ComingSoonMovies,
  TopRatedMovies,
  MPMovies,
  MPTVShows,
} from "@/components/Home";

export default function Home() {
  // // const data = await getData();

  return (
    <main className="min-h-screen p-24">
      <section className="flex flex-col justify-center items-center gap-5">
        @ts-expect-error Async Server Component
        {/* <MPMovies /> */}
        @ts-expect-error Async Server Component
        {/* <MPTVShows /> */}
      </section>
      <section className="grid grid-cols-2 gap-5">
        <div className="col-span-1 ">
          @ts-expect-error Async Server Component
          {/* <TopRatedMovies /> */}
        </div>
        <div className="col-span-1">
          @ts-expect-error Async Server Component
          {/* <ComingSoonMovies /> */}
        </div>
      </section>
    </main>
  );
}
