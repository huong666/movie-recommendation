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
      <div className="w-full py-40 px-20">
        <div className="grid grid-cols-6 gap-10">
          {searchData?.results.map((item: any) => {
            console.log(item.id);
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
