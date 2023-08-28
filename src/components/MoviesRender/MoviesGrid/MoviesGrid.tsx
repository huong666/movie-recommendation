import { handleMovie } from "@/lib/serverFun";
import MovieCard from "../MovieCard";

export default function MovieGrid({
  isLoading,
  infoMovies,
}: {
  isLoading?: boolean;
  infoMovies: any;
}) {
  // .slice(0, 24)
  return (
    <div className="grid 4xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 ss:grid-cols-1 gap-10">
      {infoMovies?.map((item: any, index: number) => {
        return (
          <MovieCard
            key={index}
            item={item.id === undefined ? item : item.id}
            handleMovie={handleMovie}
          />
        );
      })}
    </div>
  );
}
