import Link from "next/link";
import { Slide, SlideChild } from "@/components/ReactSlice";
import Movie from "@/components/Movie";
import { popMoviesApi } from "@/api";

export default async function MostPopularMoviesApi() {
  const popMoviesList = await popMoviesApi();
  const moviesList = popMoviesList?.slice(0, 12);

  return (
    <article className="px-5">
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">MOST POPULAR MOVIES</h1>
        <Link href="#" className="font-medium">
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
                {/* @ts-expect-error Async Server Component */}
                <Movie idMovieList={item} />
              </SlideChild>
            );
          })}
        </Slide>
      </div>
    </article>
  );
}
