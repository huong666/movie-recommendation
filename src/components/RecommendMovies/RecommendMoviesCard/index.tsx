import Image from "next/image";

export default function RMCard({
  img,
  rating,
  title,
}: {
  img: string;
  rating: number;
  title: string;
}) {
  return (
    <div
      // href={`/info/${item.id}`}
      className="opacity-90 hover:opacity-100"
    >
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
    </div>
  );
}
