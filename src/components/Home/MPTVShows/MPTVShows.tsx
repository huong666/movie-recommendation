import Link from "next/link";
import { Slide, SlideChild } from "@/components/ReactSlice";
import { GetMostPopTvShowApi } from "@/api/Movie";
import MovieCard from "@/components/MoviesRender/MovieCard";
import { handleMovie } from "@/lib/serverFun";

export default async function MPTVShowsApi({
  moviesList,
}: {
  moviesList: any;
}) {
  return (
    <section className="px-5">
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
            pagination: false,
          }}
          aria-label="..."
        >
          {moviesList.map((item: any, index: number) => {
            return (
              <SlideChild className="" key={index}>
                <MovieCard item={item} handleMovie={handleMovie} />
              </SlideChild>
            );
          })}
        </Slide>
      </div>
    </section>
  );
}
