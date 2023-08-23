import { getInfoMovie } from "@/api/NewApi/getInfoMovie";
import { HeroDetail, MovieInfo } from "@/components/MovieDetail";
import { Slide, SlideChild } from "@/components/ReactSlice";
import { Skeleton } from "@/components/ui/skeleton";
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

  return (
    <div>
      <title>MR - Movie Infomation</title>
      <div className="py-16 pt-28 2xl:px-56 xl:px-36 lg:px-12 px-4">
        {/* title */}
        <div className="flex items-center gap-2 text-xl font-medium">
          <Link href="/">Home</Link>
          {/* Arrow */}
          <MdOutlineArrowForwardIos />
          {infoMovie.title} {infoMovie.year}
        </div>
        {/* hero */}
        <HeroDetail infoMovie={infoMovie} />
        {/* movie info */}
        <MovieInfo infoMovie={infoMovie} />
      </div>
    </div>
  );
}
