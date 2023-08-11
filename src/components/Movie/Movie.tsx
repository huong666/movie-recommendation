import { findMovieApi } from "@/api";
// import { ratingMoviesApi } from "@/api";
import Image from "next/image";
import Link from "next/link";

// const ratingMoviesApi = async (idMovie: string) => {
//   // console.log("idMovie", idMovie);
//   const url =
//     "https://imdb8.p.rapidapi.com/title/get-ratings?tconst=" + idMovie;
//   // + idMovie;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "47c94c5903msh621e7141485fa37p14b046jsn87d577944147",
//       "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log("response", response);
//     return response;
//   } catch (error) {
//     // console.error(error);
//   }
// };

export default function Movie({ data }: { data: any }) {
  const hello = async (item: any) => {
    // const res = await ratingMoviesApi(item);
    // console.log("data", data);
    // console.log("Res ", res);
  };
  hello(data);
  // const idMovie = idMovieList.slice(7, idMovieList.length - 1);
  // //   console.log(idMovie);

  // // call Rating
  // const movieRate = await ratingMoviesApi(idMovie);
  // const percentRating = Math.round((movieRate.rating / 10) * 100);
  // //   console.log(movieRate);

  // // // call Image
  // const dataImg = await findMovieApi(idMovie);
  // const image = dataImg.results[0].image.url;
  //   const image = "/sri.jpg";
  // console.log(dataImg.results);

  return (
    <Link href={`/`} className="opacity-90 hover:opacity-100">
      <Image
        src="/sri.jpg"
        alt="Movie img"
        width={180}
        height={260}
        className="rounded-lg h-[260px]"
      />
      <div className="py-3">
        {/* <p>{`${movieRate.canRate ? percentRating + "%" : "---"}`}</p>
        <p>{movieRate.title}</p> */}
        dsadasadsdad
      </div>
    </Link>
    // <div>hello</div>
  );
}
