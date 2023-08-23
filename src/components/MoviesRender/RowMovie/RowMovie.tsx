"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";

type TypeMv = "rating" | "releasedate";

export default function CellMovie({
  item,
  handleMovie,
  type,
}: {
  item: string;
  handleMovie: (item: string) => void;
  type?: TypeMv;
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
  const rating = (movieData as any)?.rating.star * 10 + "%";

  // console.log("releaseDate", releaseDate);
  // if (movieData == undefined) return <TableRow></TableRow>;
  return (
    <TableRow>
      <Link
        href={`/info/${id}`}
        className="flex items-center justify-between dark:hover:bg-slate-900 hover:bg-slate-100 w-full"
      >
        <TableCell>{title ? title : "Loading"}</TableCell>
        <TableCell className="text-right font-semibold">
          {movieData == undefined
            ? "Loading"
            : type == "rating"
            ? rating
            : releaseDate}
        </TableCell>
      </Link>
    </TableRow>
  );
}
