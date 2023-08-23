import {
  GetComingSoonMoviesApi,
  GetMostPopTvShowApi,
  GetPopMoviesApi,
  GetTopRatedMoviesApi,
} from "@/api/Movie";
import InfoMoviesList from "@/components/InfoMoviesList";
import PopoverChooseTypeMovieList from "@/components/PopoverChooseTypeMoviesList";
type TypeList =
  | "comingsoonmovies"
  | "topratedmovies"
  | "mostpopularmovies"
  | "mostpopulartvshows";
export default async function Info() {
  // let typeList: TypeList = "mostpopulartvshows";

  const handleMovieList = async (typeList: TypeList) => {
    "use server";

    const moviesList =
      typeList == "comingsoonmovies"
        ? await GetComingSoonMoviesApi()
        : typeList == "mostpopulartvshows"
        ? await GetMostPopTvShowApi()
        : typeList == "topratedmovies"
        ? await GetTopRatedMoviesApi()
        : await GetPopMoviesApi();

    const moviesListdata = await moviesList;
    return moviesListdata;
  };

  return (
    <main className="min-h-screen py-20 2xl:px-56 xl:px-36 lg:px-12 px-8 pt-28">
      <InfoMoviesList handleMovieList={handleMovieList} />
    </main>
  );
}
