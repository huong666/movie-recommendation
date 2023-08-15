import Image from "next/image";
import Link from "next/link";

export default function MovieCard({
  item,
  handleMovie,
}: {
  item: string;
  handleMovie: (param: string) => void;
}) {
  //   const data = handleMovie(item);
  //   console.log("data from handleMovie", data);
  return (
    <>
      <Link href="/" className="opacity-90 hover:opacity-100">
        <Image
          src="/sri.jpg"
          alt="Movie img"
          width={180}
          height={260}
          className="rounded-lg h-[260px]"
        />
        <div className="py-3">
          {/* <p>{`${rating ? percentRating + "%" : "---"}`}</p> */}
          {/* <p>{data.title.title}</p> */}
        </div>
      </Link>
    </>
  );
}
