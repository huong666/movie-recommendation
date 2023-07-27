import ClientLayout from "../ClientLayout";

//Rating
async function ratingMovies(idMovie: string) {
  const url =
    "https://imdb8.p.rapidapi.com/title/get-ratings?tconst=" + idMovie;
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
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default async function Rating({ idMovie }: { idMovie: string }) {
  const movieRate = await ratingMovies(idMovie);

  const percentRating = (movieRate.rating / 10) * 100;

  return (
    <div className="py-3">
      <p>{`${percentRating}%`}</p>
      <p>{movieRate.title}</p>
    </div>
  );
}
