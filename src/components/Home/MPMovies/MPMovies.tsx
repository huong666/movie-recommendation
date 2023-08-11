import Link from "next/link";
import { Slide, SlideChild } from "@/components/ReactSlice";
import Movie from "@/components/Movie";
// import { popMoviesApi } from "@/api";
import { useEffect, useState } from "react";

export default function MostPopularMovies({ moviesList }: { moviesList: any }) {
  // const popMoviesList = await popMoviesApi();
  // console.log(popMoviesList);
  // const moviesList = popMoviesList?.slice(0, 12);

  // export default function MostPopularMovies() {
  //   const [moviesList, setMoviesList] = useState([]);

  //   const popularMoviesApi = async () => {
  //     try {
  //       const res = await popMoviesApi();
  //       const response = res.slice(0, 12);
  //       // console.log("res", response);
  //       setMoviesList(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   useEffect(() => {
  //     popularMoviesApi();
  //   }, []);

  //   console.log("api popular movie", moviesList);

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
            // console.log(item);
            return (
              <SlideChild className="" key={index}>
                <Movie data={item} />
              </SlideChild>
            );
          })}
        </Slide>
      </div>
    </article>
  );
}
