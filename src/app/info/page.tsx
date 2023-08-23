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
  let typeList: TypeList = "comingsoonmovies";

  const moviesList =
    typeList == "comingsoonmovies"
      ? await GetComingSoonMoviesApi()
      : typeList == "mostpopulartvshows"
      ? await GetMostPopTvShowApi()
      : typeList == "topratedmovies"
      ? await GetTopRatedMoviesApi()
      : await GetPopMoviesApi();

  return (
    <main className="min-h-screen py-20 2xl:px-56 xl:px-36 lg:px-12 px-8 pt-28">
      <PopoverChooseTypeMovieList />
      <hr className="my-5 border-black dark:border-white" />
      <InfoMoviesList moviesList={moviesList} />
    </main>
  );
}
