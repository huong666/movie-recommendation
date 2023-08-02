import MovieName from "@/components/MovieName";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_Host;

export async function moviesComingSoon() {
  const url =
    "https://imdb8.p.rapidapi.com/title/get-coming-soon-movies?homeCountry=US&purchaseCountry=US&currentCountry=US";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": rapidApiHost,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default async function ComingSoonMovies() {
  const comingSoonMoviesList = await moviesComingSoon();
  const fisrtTenMovie = comingSoonMoviesList.slice(0, 10);
  // console.log(fisrtTenMovie);

  return (
    <article className="">
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">COMING SOON MOVIES</h1>
        <Link href="#" className="font-medium text-sm">
          VIEW ALL
        </Link>
      </div>
      <div>
        <Table>
          <TableBody>
            {fisrtTenMovie.map((item: any) => {
              const id = item.id.slice(7, item.id.length - 1);
              return (
                <TableRow key={item.id}>
                  <TableCell className="">
                    {/* @ts-expect-error Async Server Component */}
                    <MovieName id={id} />
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {item.releaseDate}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </article>
  );
}
