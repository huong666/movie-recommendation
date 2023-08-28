"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function MovieCard({
  item,
  handleMovie,
}: {
  item: string;
  handleMovie: (param: string) => void;
}) {
  // const data = handleMovie(item);
  // console.log("data from handleMovie", data);
  const [movieData, setMovieData] = useState<any>();

  async function handleMovieApi() {
    const data: any = await handleMovie(item);
    setMovieData(data);
  }

  // console.log("cookie data", getCookie(item));

  useEffect(() => {
    if (movieData == undefined) {
      handleMovieApi();
    }
    setTimeout(() => {
      handleMovieApi();
    }, 18000000);
  }, []);

  const id = movieData?.id;
  const rating = movieData?.rating.star * 10;
  const title = movieData?.title;
  const img = movieData?.image;
  const date = movieData?.releaseDetailed.year;

  return (
    <>
      {img == undefined ? (
        <Skeleton className="w-[180px] h-[280px]" />
      ) : (
        <Link href={`/info/${id}`} className="opacity-90 hover:opacity-100">
          <div className="">
            <Image
              priority
              src={img}
              alt="Movie img"
              width={180}
              height={240}
              className="rounded-md h-[240px] mx-auto"
            />
          </div>
          <div className="py-3 mx-auto">
            <p className="font-semibold flex justify-between items-center">
              <span>{rating}%</span>
              <span>{date}</span>
            </p>
            <p className="text-sm">{title}</p>
          </div>
        </Link>
      )}
    </>
  );
}
