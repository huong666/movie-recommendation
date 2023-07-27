// movie image

import Image from "next/image";

async function movieImage(idMovie: string) {
  const url = `https://imdb8.p.rapidapi.com/title/find?q=` + idMovie;
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

export default async function MovieImg({ idMovie }: { idMovie: string }) {
  const data = await movieImage(idMovie);
  // console.log(data);
  const image = data.results[0].image.url;

  return (
    <>
      <Image
        src={image}
        alt="Movie img"
        width={180}
        height={258}
        className="rounded-lg"
      />
    </>
  );
}
