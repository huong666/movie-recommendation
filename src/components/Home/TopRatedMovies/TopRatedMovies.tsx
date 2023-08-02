import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MovieName from "../../MovieName/MovieName";
const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_Host;

export async function moviesTopRated() {
  const url = "https://imdb8.p.rapidapi.com/title/get-top-rated-movies";
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

export default async function TopRatedMovies() {
  const moviesTopRatedList = await moviesTopRated();
  const fisrtTenMovie = moviesTopRatedList.slice(0, 10);

  // console.log(fisrtTenMovie);

  return (
    <article className="">
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">TOP RATED MOVIES</h1>
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
                    {item.chartRating * 10}%
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
