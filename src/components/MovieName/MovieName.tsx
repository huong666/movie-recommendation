import { findMovieApi } from "@/api";
import Link from "next/link";

export default async function MovieName({ id }: { id: string }) {
  const name = await findMovieApi(id);
  const idParam = name.results[0].id.slice(7, name.results[0].id.length - 1);
  // console.log(idParam);
  // console.log(name.results);
  return <Link href={`/info/${idParam}`}>{name.results[0].title}</Link>;
  // return <>{name.results[0].title}</>;
}
