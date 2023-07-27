import Link from "next/link";
import Slide from "@/components/Slide";

//MostPopularMovies
async function popMovies() {
  const url =
    "https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "43dac7a417mshe9eaa4130b691bfp1f4ac4jsn00a23d7eb51f",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default async function MostPopularMovies() {
  const popMoviesList = await popMovies();

  // console.log(popMoviesList);

  return (
    <section className="px-5">
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">MOST POPULAR MOVIES</h1>
        <Link href="#" className="font-medium">
          VIEW ALL
        </Link>
      </div>
      <div className="flex gap-5 p-1">
        <Slide moviesList={popMoviesList.slice(0, 12)} />
      </div>
    </section>
  );
}
