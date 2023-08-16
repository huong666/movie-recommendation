"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ActorCard({
  idActor,
  index,
}: {
  idActor: string;
  index: number;
}) {
  const [bioActor, setBioActor] = useState(null);

  function bioActorApi(idActorr: string) {
    try {
      const url =
        "https://imdb8.p.rapidapi.com/actors/get-bio?nconst=" + idActorr;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5ff7f797ddmsh24044434aba1c7ap17974ajsn002dcd1c7fbc",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          setBioActor(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (bioActor == null) {
      bioActorApi(idActor);
    } else {
      setTimeout(() => {
        bioActorApi(idActor);
      }, 1800000);
      //   1800000
    }
  }, []);

  if (bioActor == null) {
    return;
  } else {
    return (
      bioActor != null && (
        <article className="flex flex-row border p-2 gap-5 bg-[#d7d7d7] w-full rounded-lg">
          <div className="w-1/4">
            <Image
              src={
                (bioActor as any)?.image
                  ? (bioActor as any).image.url
                  : "/img-notfound.png"
              }
              alt="Actor"
              width={300}
              height={300}
              className="w-full h-[210px] rounded-lg"
            />
          </div>
          <div className="w-3/4">
            <h1 className="text">
              {index + 1}.{" "}
              <Link href="" className="text-xl font-medium">
                {(bioActor as any).name}
              </Link>
            </h1>
            <p className="text-sm py-2">Actor | Pee-wee's Playhouse</p>
            <p>
              "Frequently works with directors Nicolas Winding Refn, Derek
              Cianfrance, and Damien Chazelle"
            </p>
          </div>
        </article>
      )
    );
  }
}
