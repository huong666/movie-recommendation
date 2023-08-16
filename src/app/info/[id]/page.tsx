import { getInfoMovie } from "@/api/NewApi/getInfoMovie";
import { Slide, SlideChild } from "@/components/ReactSlice";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default async function infoMovie({
  params,
}: {
  params: { id: string };
}) {
  const infoMovie = await getInfoMovie(params.id);
  // const actor = findMovie.results[0].principals;

  // console.log("movie Data", infoMovie);

  const releaseDate =
    infoMovie.releaseDetailed.day +
    "/" +
    infoMovie.releaseDetailed.month +
    "/" +
    infoMovie.releaseDetailed.year;

  return (
    <div>
      <title>MR - Movie Infomation</title>
      <div className="py-16 px-20 pt-28">
        {/* title */}
        <div className="flex items-center gap-2 text-xl font-medium">
          <Link href="/">Home</Link>
          {/* Arrow */}
          <MdOutlineArrowForwardIos />
          {infoMovie.title} {infoMovie.year}
        </div>
        {/* hero */}
        <section className="px-10 py-5">
          <div className="flex flex-row gap-5">
            <div className="w-1/6 rounded-lg">
              <Image
                src={infoMovie.image}
                alt="Movie Image"
                width={200}
                height={333}
                className="rounded-lg"
              />
            </div>
            <div className="w-5/6 flex flex-col gap-10 justify-center items-center rounded-lg bg-slate-100 dark:bg-slate-900">
              <div className="text-center">
                <h1 className="text-3xl font-semibold mb-3">
                  {infoMovie.title}
                </h1>
                <p className="text-sm">
                  {infoMovie.year},{" "}
                  {infoMovie.genre.map((item: any, index: number) => {
                    return (
                      <span key={index}>
                        {item}
                        {index !== infoMovie.genre.length - 1 && ", "}
                      </span>
                    );
                  })}
                  , {infoMovie.runtimeSeconds / 60 + " Minutes"}
                </p>
              </div>
              <div className="mx-auto flex justify-between items-center gap-10 w-full">
                <div className="flex flex-col items-center w-1/2">
                  <p className="font-bold text-4xl self-end">--%</p>
                  <p className="text-sm font-medium self-end">TOMATOMETER</p>
                  <p className="text-green-500 self-end text-sm">No Review</p>
                </div>
                <div className="flex flex-col items-center w-1/2">
                  <p className="font-bold text-4xl self-start">
                    {infoMovie.rating != undefined ? (
                      infoMovie.rating.star * 10 + "%"
                    ) : (
                      <span>--%</span>
                    )}
                  </p>
                  <p className="text-sm font-medium self-start">
                    AUDIENCE SCORE
                  </p>
                  <p className="text-green-500 self-start text-sm">
                    {infoMovie.rating
                      ? infoMovie.rating.count >= 50
                        ? "There are " + infoMovie.rating.count + " Ratings"
                        : "Fewer than 50 Ratings"
                      : "No Review"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* movie info */}
        <section className="px-10 py-5">
          <div className="">
            <div className="flex flex-col gap-3 bg-slate-100 dark:bg-gray-900 rounded-lg p-8">
              <h1 className="text-xl font-medium mb-2 ">WHAT TO KNOW</h1>
              <p className="text-justify mb-5">{infoMovie.plot}</p>
              {/* <button className="text-blue-400 py-3 self-start">
                Show more
              </button> */}
              {/* plotSummary */}
              <div className="my-5">
                <Slide
                  options={{
                    start: 1,
                    fixedWidth: 250,
                    height: 170,
                    gap: "1rem",
                    perPage: 4,
                    pagination: false,
                  }}
                >
                  {infoMovie.images.map((item: string, index: number) => {
                    return (
                      <SlideChild key={index}>
                        <Image
                          src={item}
                          alt=""
                          width={250}
                          height={400}
                          className="h-full rounded-md"
                        />
                      </SlideChild>
                    );
                  })}
                </Slide>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3">
                  <p>
                    <strong>Genres: </strong>
                    {infoMovie.genre.map((item: any, index: number) => {
                      return (
                        <span key={index}>
                          {index == infoMovie.genre.length - 1
                            ? item
                            : item + ", "}
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
                    {infoMovie.directors[0]}
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
      </div>
    </div>
  );
}
