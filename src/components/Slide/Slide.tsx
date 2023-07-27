"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ComponentMovie from "../ComponentMovie";
import ClientLayout from "../Movie/ClientLayout";
import MovieImg from "../Movie/MovieImg";
import Rating from "../Movie/Rating";

export default function Slide({ moviesList }: { moviesList: any }) {
  const rdString = "/title/tt1695843/";
  const idMovie = moviesList.slice(7, rdString.length - 1);
  return (
    <article>
      <Splide options={{ rewind: true, width: "100%" }}>
        {moviesList.map((item: any, index: any) => {
          const idMovie = item.slice(7, rdString.length - 1);
          return (
            <SplideSlide key={index}>
              {/* <ComponentMovie idMovie={idMovie} /> */}
              <ClientLayout>
                <MovieImg idMovie={idMovie} />
              </ClientLayout>
              <ClientLayout>
                <Rating idMovie={idMovie} />
              </ClientLayout>
            </SplideSlide>
          );
        })}
      </Splide>
    </article>
  );
}
