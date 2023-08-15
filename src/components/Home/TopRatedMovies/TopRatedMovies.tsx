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
import { GetTopRatedMoviesApi } from "@/api/Movie";

export default async function TopRatedMovies() {
  const moviesTopRatedList = await GetTopRatedMoviesApi();
  const fisrtTenMovie = moviesTopRatedList.slice(0, 10);

  // console.log(fisrtTenMovie);

  return (
    <section className="">
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
                    {/* <MovieName id={id} /> */}
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
    </section>
  );
}
