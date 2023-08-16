"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CellMovie({
  item,
  handleMovie,
}: {
  item: string;
  handleMovie: (item: string) => void;
}) {
  const [movieData, setMovieData] = useState();

  async function handleMovieApi() {
    const data: any = await handleMovie(item);
    setMovieData(data);
  }

  useEffect(() => {
    if (movieData == undefined) {
      handleMovieApi();
    }
    setTimeout(() => {
      handleMovieApi();
    }, 18000000);
  }, []);

  // console.log("dasda", movieData);

  const id = (movieData as any)?.id;
  const title = (movieData as any)?.title;
  const releaseDate =
    (movieData as any)?.releaseDetailed.day +
    "/" +
    (movieData as any)?.releaseDetailed.month +
    "/" +
    (movieData as any)?.year;

  // console.log("releaseDate", releaseDate);
  if (movieData == undefined)
    return (
      <TableRow>
        <TableCell className="">Loading</TableCell>
        <TableCell className="text-right font-semibold">Loading</TableCell>
      </TableRow>
    );
  return (
    <TableRow>
      <TableCell className="">
        <Link href={`/info/${id}`}>{title}</Link>
      </TableCell>
      <TableCell className="text-right font-semibold">{releaseDate}</TableCell>
    </TableRow>
  );
}
