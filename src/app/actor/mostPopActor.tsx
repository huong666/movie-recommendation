import { ActorBioApi, MostPopularActorApi } from "@/api";
import ActorCard from "@/components/ActorCard";
import Image from "next/image";
import Link from "next/link";

export default async function News() {
  const popActorList = await MostPopularActorApi();
  const first50Actors = popActorList.slice(0, 10);

  // console.log("popActorList", first50Actors);
  return (
    <section className="py-10 px-40">
      <div className="flex flex-col border p-2">
        <div>
          <h1 className="text-3xl font-semibold py-3 mb-5">
            Match All (Sorted by Popularity Ascending)
          </h1>
        </div>
        <div className="w-full flex flex-row rounded-lg gap-10">
          <div className="flex flex-col items-center gap-3 xl:w-2/3 w-full rounded-lg">
            {first50Actors?.map((item: any, index: number) => {
              return (
                <ActorCard key={index} idActor={item.slice(6, item.length)} />
              );
            })}
          </div>
          <div className="w-1/3 max-xl:hidden">Other Content</div>
        </div>
      </div>
    </section>
  );
}
