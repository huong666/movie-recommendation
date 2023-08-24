import Link from "next/link";
import { Slide, SlideChild } from "@/components/ReactSlice";
import { GetMostPopTvShowApi } from "@/api/Movie";
import { MovieCard } from "@/components/MoviesRender";
import { handleMovie } from "@/lib/serverFun";

export default function MPTVShowsApi({ moviesList }: { moviesList: any }) {
  return (
    <section className="w-full">
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">MOST POPULAR TV SHOWS</h1>
        {/* <Link href="#" className="font-medium text-sm">
          VIEW ALL
        </Link> */}
      </div>
      <div className="flex gap-5">
        <Slide
          options={{
            start: 0,
            width: "100%",
            gap: "2rem",
            padding: "1rem",
            perPage: 6,
            pagination: false,
            mediaQuery: "min",
            breakpoints: {
              1700: {
                perPage: 7,
              },
              1440: {
                perPage: 6,
              },
              1024: {
                perPage: 5,
              },
              768: {
                perPage: 4,
              },
              390: {
                perPage: 2,
              },
              0: {
                perPage: 1,
              },
            },
          }}
        >
          {moviesList.map((item: any, index: number) => {
            return (
              <SlideChild
                className=" hover:bg-slate-200 dark:hover:bg-slate-900 rounded-md"
                key={index}
              >
                <MovieCard item={item} handleMovie={handleMovie} />
              </SlideChild>
            );
          })}
        </Slide>
      </div>
    </section>
  );
}
