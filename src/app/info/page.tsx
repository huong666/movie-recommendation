import InfoMoviesList from "@/components/InfoMoviesList";
import { handleMovieList } from "@/lib/serverFun";

export default async function Info() {
  // let typeList: TypeList = "mostpopulartvshows";

  return (
    <main className="min-h-screen py-20 2xl:px-56 xl:px-36 lg:px-12 px-8 pt-28">
      <InfoMoviesList handleMovieList={handleMovieList} />
    </main>
  );
}
