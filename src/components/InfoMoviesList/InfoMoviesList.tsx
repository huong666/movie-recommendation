import { MovieCard } from "../MoviesRender";
import { handleMovie } from "@/lib/serverFun";

export default async function InfoMoviesList({
  moviesList,
}: {
  moviesList: any;
}) {
  return (
    <section>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 ss:grid-cols-1 gap-10">
        {moviesList?.slice(0, 24).map((item: any) => {
          return (
            <MovieCard item={item.id} handleMovie={handleMovie} key={item.id} />
          );
        })}
      </div>
    </section>
  );
}
