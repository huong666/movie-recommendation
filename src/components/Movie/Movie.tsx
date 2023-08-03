import { findMovieApi } from "@/api";
import { ratingMoviesApi } from "@/api";
import Image from "next/image";
import Link from "next/link";

export default async function Movie({ idMovieList }: { idMovieList: string }) {
  const idMovie = idMovieList.slice(7, idMovieList.length - 1);
  //   console.log(idMovie);

  // call Rating
  const movieRate = await ratingMoviesApi(idMovie);
  const percentRating = Math.round((movieRate.rating / 10) * 100);
  //   console.log(movieRate);

  // // call Image
  const dataImg = await findMovieApi(idMovie);
  const image = dataImg.results[0].image.url;
  //   const image = "/sri.jpg";
  // console.log(dataImg.results);

  return (
    <Link href={`/${idMovie}`} className="opacity-90 hover:opacity-100">
      <Image
        src={image}
        alt="Movie img"
        width={180}
        height={260}
        className="rounded-lg h-[260px]"
      />
      <div className="py-3">
        <p>{`${movieRate.canRate ? percentRating + "%" : "---"}`}</p>
        <p>{movieRate.title}</p>
      </div>
    </Link>
  );
}
