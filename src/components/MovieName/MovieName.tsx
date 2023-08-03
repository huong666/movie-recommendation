import { findMovieApi } from "@/api";

export default async function MovieName({ id }: { id: string }) {
  const name = await findMovieApi(id);
  //   console.log(name.results[0].title);
  return <>{name.results[0].title}</>;
}
