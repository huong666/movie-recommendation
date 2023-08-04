import { findMovieApi, MovieOverviewDetailApi } from "@/api";
import ActorImage from "@/components/ActorImage/ActorImage";
import { Slide, SlideChild } from "@/components/ReactSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default async function OverviewMovie({
  params,
}: {
  params: { id: string };
}) {
  const overviewMovie = await MovieOverviewDetailApi(params.id);
  const findMovie = await findMovieApi(params.id);

  const actor = findMovie.results[0].principals;

  const audienceRated = overviewMovie.ratings.canRate;
  const audienceScore = overviewMovie.ratings.rating * 10;
  const audienceRatingcount = overviewMovie.ratings.ratingCount;

  return (
    <div>
      <div className="py-16 px-20 pt-28">
        {/* title */}
        <div className="flex items-center gap-2 text-xl font-medium">
          <Link href="/">Home</Link>
          {/* Arrow */}
          <MdOutlineArrowForwardIos />
          {overviewMovie.title.title} {overviewMovie.title.year}
        </div>
        {/* hero */}
        <section className="px-10 py-5">
          <div className="flex flex-row gap-5">
            <div className="w-1/6 rounded-xl">
              <Image
                src={overviewMovie.title.image.url}
                alt="Movie Image"
                width={200}
                height={333}
                className="rounded-xl"
              />
            </div>
            <div className="w-5/6 flex flex-col gap-10 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-900">
              <div className="text-center">
                <h1 className="text-3xl font-semibold mb-3">
                  {overviewMovie.title.title}
                </h1>
                <p className="text-sm">
                  {overviewMovie.title.year},{" "}
                  {overviewMovie.genres.map((item: any, index: number) => {
                    return <span key={index}>{item + ", "}</span>;
                  })}
                  , {overviewMovie.title.runningTimeInMinutes + " Minutes"}
                </p>
              </div>
              <div className="mx-auto flex justify-between items-center gap-10 w-full">
                <div className="flex flex-col items-center w-1/2">
                  <p className="font-bold text-4xl self-end">--%</p>
                  <p className="text-sm font-medium self-end">TOMATOMETER</p>
                  <p className="text-green-500 self-end">No Review</p>
                </div>
                <div className="flex flex-col items-center w-1/2">
                  <p className="font-bold text-4xl self-start">
                    {audienceRated ? audienceScore + "%" : <span>--%</span>}
                  </p>
                  <p className="text-sm font-medium self-start">
                    AUDIENCE SCORE
                  </p>
                  <p className="text-green-500 self-start">
                    {audienceRated
                      ? audienceRatingcount >= 50
                        ? "There are " + audienceRatingcount + " Ratings"
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
            <div className="flex flex-col gap-3 bg-slate-100 dark:bg-gray-900 rounded-xl p-8">
              <h1 className="text-xl font-medium mb-5 ">MOVIE INFO</h1>
              <p className="text-justify mb-10">
                {overviewMovie.plotSummary == undefined
                  ? overviewMovie.plotOutline.text
                  : overviewMovie.plotSummary.text}
              </p>
              {/* <button className="text-blue-400 py-3 self-start">
                Show more
              </button> */}
              {/* plotSummary */}
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-3">
                  <p>
                    <strong>Genres: </strong>
                    {overviewMovie.genres.map((item: any, index: number) => {
                      return (
                        <span key={index}>
                          {index == overviewMovie.genres.length - 1
                            ? item
                            : item + ", "}
                        </span>
                      );
                    })}
                  </p>
                  <p>
                    <strong>Type: </strong>
                    {overviewMovie.title.titleType}
                  </p>
                  <p>
                    <strong>Year: </strong>
                    {overviewMovie.title.year}
                  </p>
                  <p>
                    <strong>Release Date: </strong>
                    {overviewMovie.releaseDate}
                  </p>
                  <p>
                    <strong>Author: </strong>
                    {overviewMovie.plotSummary != undefined
                      ? overviewMovie.plotSummary.author
                      : overviewMovie.plotOutline.author}
                  </p>
                  <p>
                    <strong>Rank: </strong>
                    {overviewMovie.ratings.otherRanks != undefined
                      ? "Rank " +
                        overviewMovie.ratings.otherRanks[0].rank +
                        " on " +
                        overviewMovie.ratings.otherRanks[0].label
                      : "This movie has no rank !"}
                  </p>
                  <p>
                    <strong>Run Time: </strong>
                    {overviewMovie.title.runningTimeInMinutes}
                  </p>
                  {overviewMovie.title.titleType == "movie" ? (
                    ""
                  ) : (
                    <p>
                      <strong>Number of Episodes: </strong>
                      {overviewMovie.title.numberOfEpisodes}
                    </p>
                  )}
                </div>
                <div className="py-7">
                  <Slide
                    options={{
                      rewind: true,
                      width: "100%",
                      height: "40vh",
                      perPage: 4,
                      pageMove: 2,
                      gap: "1rem",
                      pagination: false,
                      arrows: actor.length > 4 ? true : false,
                    }}
                  >
                    {actor.map((item: any, index: number) => {
                      return (
                        <SlideChild className="" key={index}>
                          <ActorImage
                            actorId={item.id.slice(6, item.id.length - 1)}
                          />
                        </SlideChild>
                      );
                    })}
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
