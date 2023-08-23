"use client";

import { getMoviesSearchApi } from "@/api/NewApi/getMovieSearchApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SearchMovie({
  searchParams,
}: {
  searchParams: { SearchMovie: string };
}) {
  const [searchData, setSearchData] = useState<any>();

  async function handleSearchData() {
    const data = await getMoviesSearchApi(searchParams.SearchMovie);
    setSearchData(data);
  }

  useEffect(() => {
    if (searchData == undefined) {
      handleSearchData();
    } else {
      setTimeout(() => {
        handleSearchData();
      }, 18000000);
    }
  }, []);

  return (
    <section className="w-full">
      <div className="min-h-screen py-20 2xl:px-56 xl:px-36 lg:px-12 px-8 pt-28">
        <h1 className="my-5 text-xl font-medium">
          Search: {searchParams.SearchMovie}
        </h1>
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 ss:grid-cols-1 gap-10">
          {searchData?.results.map((item: any) => {
            return (
              <Link href={`/info/${item.id}`} key={item.id} className="">
                <Image
                  src={item.image != null ? item.image : "/img-notfound.png"}
                  alt=""
                  width={250}
                  height={400}
                  className="rounded-md h-[290px]"
                />
                <p className="font-medium">{item.title}</p>
                <p>{item.year}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
