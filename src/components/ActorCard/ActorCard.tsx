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
            "b29180847fmshbfcbdaeffc4d17bp1744cajsn7be3581f3962",
          "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
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
            {(bioActor as any)?.image
              ? (bioActor as any).image.url
              : "/img-notfound.png"}
            <img
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
              1.{" "}
              <Link href="" className="text-xl font-medium">
                Paul Reubens
              </Link>
            </h1>
            <p className="text-sm py-2">Actor | Pee-wee's Playhouse</p>
            <p>
              Paul Reubens was born Paul Rubenfeld on August 27, 1952 in
              Peekskill, New York, to Judy (Rosen), a teacher, and Milton
              Rubenfeld, a car salesman who had flown for the air forces of the
              U.S., U.K., and Israel, becoming one of the latter country's
              pioneering pilots. Paul grew up in Sarasota, Florida,...
            </p>
          </div>
        </article>
      )
    );
  }
}
