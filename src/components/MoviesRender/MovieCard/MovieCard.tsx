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
  const [movieData, setMovieData] = useState();

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

  const id = (movieData as any)?.id;
  const rating = (movieData as any)?.rating.star * 10;
  const title = (movieData as any)?.title;
  const img = (movieData as any)?.image;

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
              height={280}
              className="rounded-md h-[240px] mx-auto object-fill"
            />
          </div>
          <div className="py-3 mx-auto">
            <p className="font-semibold">{rating}%</p>
            <p className="text-sm">{title}</p>
          </div>
        </Link>
      )}
    </>
  );
}
