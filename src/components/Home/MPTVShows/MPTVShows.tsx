import Link from "next/link";
import { Slide, SlideChild } from "@/components/ReactSlice";
import Movie from "@/components/Movie";
import { popTVMoviesApi } from "@/api";

export default async function MPTVShowsApi() {
  const popTVMoviesList = await popTVMoviesApi();
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
              <SlideChild className="" key={index}>
                <Movie idMovieList={item} />
              </SlideChild>
            );
          })}
        </Slide>
      </div>
    </article>
  );
}
