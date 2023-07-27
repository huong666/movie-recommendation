import MovieImg from "../Movie/MovieImg";
import Rating from "../Movie/Rating";
import ComponentLayout from "./layout";

export default async function ComponentMovie({ idMovie }: { idMovie: string }) {
  return (
    <ComponentLayout>
      <MovieImg idMovie={idMovie} />
      <Rating idMovie={idMovie} />
    </ComponentLayout>
  );
}
