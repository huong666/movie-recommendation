import Image from "next/image";
import Link from "next/link";

export default function RMCard({
  img,
  rating,
  title,
  id,
}: {
  img: string;
  rating: number;
  title: string;
  id: string;
}) {
  return (
    <Link href={`/info/${id}`} className="opacity-90 hover:opacity-100">
      <Image
        priority
        src={img}
        alt="Movie img"
        width={180}
        height={280}
        className="rounded-md w-full mx-auto  object-fill h-[240px]"
      />
      <div className="py-3 mx-auto">
        <p className="font-semibold">{rating}%</p>
        <p className="text-sm">{title}</p>
      </div>
    </Link>
  );
}
