import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Info() {
  return (
    <main>
      <div className="py-16 px-20 pt-28">
        {/* title */}
        <div className="flex items-center gap-2 text-xl font-medium">
          <Link href="/">Home</Link>
          {/* Arrow */}
          <MdOutlineArrowForwardIos />
          Physical (2023)
        </div>
        {/* hero */}
        <section className="px-10 py-5">
          <div className="flex flex-row gap-5">
            <div className="w-1/6 rounded-xl">
              <Image
                src="/sri.jpg"
                alt="Movie Image"
                width={200}
                height={333}
                className="rounded-xl"
              />
            </div>
            <div className="w-5/6 flex flex-col gap-10 justify-center items-center rounded-xl bg-slate-100 dark:bg-slate-900">
              <div className="text-center">
                <h1 className="text-3xl font-semibold mb-3">QuickSand</h1>
                <p className="text-sm">2023, Mystery & thriller, 1h 26m</p>
              </div>
              <div className="mx-auto flex justify-between items-center gap-10 w-full">
                <div className="flex flex-col items-center w-1/2">
                  <p className="font-bold text-4xl self-end">36%</p>
                  <p className="text-sm font-medium self-end">TOMATOMETER</p>
                  <p className="text-green-500 self-end">22 Reviews</p>
                </div>
                <div className="flex flex-col items-center w-1/2">
                  <p className="font-bold text-4xl self-start">25%</p>
                  <p className="text-sm font-medium self-start">
                    AUDIENCE SCORE
                  </p>
                  <p className="text-green-500 self-start">
                    Fewer than 50 Ratings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* movie info */}
        <section className="px-10 py-5">
          <div>
            <h1 className="text-xl font-medium mb-5">MOVIE INFO</h1>
            <div>
              <p className="">
                {/* plotSummary */}
                Quicksand follows an American couple on the brink of divorce who
                travel to Colombia for a work conference. While on a hike
                through the rainforest, a storm causes them to become trapped in
                a pit of quicksand. Unable to move, it becomes a struggle for
                survival as they battle the elements of the jungle and a
                venomous snake in order to escape.
              </p>
              <button className="text-blue-400 py-3">Show more</button>
              <p>
                <strong>Genres:</strong>
              </p>
              <p>
                <strong>Type:</strong>
              </p>
              <p>
                <strong>Year</strong>
              </p>
              <p>
                <strong>Release Date:</strong>
              </p>
              <p>
                <strong>Author:</strong>
              </p>
              <p>
                <strong>Rank:</strong>
              </p>
              <p>
                <strong>Run Time:</strong>
              </p>
              <p>
                <strong>Number of Episodes</strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
