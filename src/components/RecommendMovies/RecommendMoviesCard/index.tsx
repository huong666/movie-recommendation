import Image from "next/image";
import Link from "next/link";

export default function RMCard({
  img,
  rating,
  title,
  id,
  date,
}: {
  img: string;
  rating: number;
  title: string;
  id: string;
  date: string;
}) {
  return (
    <Link href={`/info/${id}`} className="opacity-90 hover:opacity-100">
      <Image
        priority
        src={img}
        alt="Movie img"
        width={180}
        height={280}
        className="rounded-md mx-auto h-[240px]"
      />
      <div className="py-3 mx-auto">
        <p className="font-semibold flex justify-between item-center">
          <span>{rating}% </span> <span>{date}</span>
        </p>
        <p className="text-sm">{title}</p>
      </div>
    </Link>
  );
}
