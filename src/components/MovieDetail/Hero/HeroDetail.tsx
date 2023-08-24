import Image from "next/image";

export default function HeroDetail({ infoMovie }: { infoMovie: any }) {
  return (
    <section className="md:py-5">
      <div className="flex sm:flex-row flex-col gap-5">
        <div className="lg:w-1/6 sm:w-1/4 w-full rounded-lg">
          <Image
            src={infoMovie.image}
            alt="Movie Image"
            width={200}
            height={333}
            className="rounded-lg mx-auto"
          />
        </div>
        <div className="lg:w-5/6 sm:w-3/4 w-full flex flex-col gap-10 justify-center items-center rounded-lg bg-slate-100 dark:bg-slate-900">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-3">{infoMovie.title}</h1>
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
              <p className="text-sm font-medium self-start">AUDIENCE SCORE</p>
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
  );
}
