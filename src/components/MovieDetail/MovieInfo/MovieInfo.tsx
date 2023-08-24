import { Slide, SlideChild } from "@/components/ReactSlice";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function MovieInfo({ infoMovie }: { infoMovie: any }) {
  const releaseDate =
    infoMovie.releaseDetailed.day +
    "/" +
    infoMovie.releaseDetailed.month +
    "/" +
    infoMovie.releaseDetailed.year;
  return (
    <section className="py-5">
      <div className="">
        <div className="flex flex-col gap-3 bg-slate-100 dark:bg-gray-900 rounded-lg p-8">
          <h1 className="text-xl font-medium mb-2 ">WHAT TO KNOW</h1>
          <p className="text-justify mb-5">{infoMovie.plot}</p>
          <div className="my-5 h-[180px]">
            <Slide
              options={{
                start: 1,
                autoWidth: "auto",
                // fixwidth: 250,
                height: 170,
                gap: "1rem",
                // perPage: 6,
                pagination: false,
              }}
            >
              {infoMovie.images.map((item: string, index: number) => {
                return (
                  <SlideChild key={index}>
                    {item == undefined ? (
                      <Skeleton className="w-[250px] h-[170px]" />
                    ) : (
                      <Image
                        src={item}
                        alt=""
                        width={250}
                        height={170}
                        className="h-full rounded-md object-cover"
                      />
                    )}
                  </SlideChild>
                );
              })}
            </Slide>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap-3">
              <p>
                <strong>Genres: </strong>
                {infoMovie.genre.map((item: any, index: number) => {
                  return (
                    <span key={index}>
                      {index == infoMovie.genre.length - 1 ? item : item + ", "}
                    </span>
                  );
                })}
              </p>
              <p>
                <strong>Type: </strong>
                {infoMovie.contentType}
              </p>
              <p>
                <strong>Year: </strong>
                {infoMovie.year}
              </p>
              <p>
                <strong>Release Date: </strong>
                {releaseDate}
              </p>
              <p>
                <strong>Directors: </strong>
                {infoMovie.directors.length == 0
                  ? "Not Update Yet!"
                  : infoMovie.directors.map((item: string, index: number) => {
                      return (
                        <span key={index}>
                          {index == infoMovie.directors.length - 1
                            ? item
                            : item + ", "}
                        </span>
                      );
                    })}
              </p>
              {/* <p>
              <strong>Rank: </strong>
            {infoMovie.ratings.otherRanks != undefined
                ? "Rank " +
                  infoMovie.ratings.otherRanks[0].rank +
                  " on " +
                  infoMovie.ratings.otherRanks[0].label
                : "This movie has no rank !"} 
            </p> */}
              <p>
                <strong>Run Time: </strong>
                {infoMovie.runtimeSeconds / 60} Minutes
              </p>
              {infoMovie.contentType !== "TVSeries" ? (
                ""
              ) : (
                <p>
                  <strong>Number of Episodes: </strong>
                  {infoMovie.numberOfEpisodes}
                </p>
              )}
            </div>
            <div className="py-7">
              {/* <Slide
              options={{
                rewind: true,
                width: "100%",
                height: "40vh",
                perPage: 4,
                pageMove: 2,
                gap: "1rem",
                pagination: false,
                // arrows: actor.length > 4 ? true : false, 
              }}
            >*/}
              {
                // actor.map((item: any, index: number) => {
                //   return (
                //     <SlideChild className="" key={index}>
                //       {/* <ActorImage
                //         actorId={item.id.slice(6, item.id.length - 1)}
                //       /> */}
                //     </SlideChild>
                //   );
                // })
              }
              {/* </Slide> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
