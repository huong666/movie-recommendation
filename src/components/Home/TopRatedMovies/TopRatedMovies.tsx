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
import { handleMovie } from "@/lib/serverFun";
import { RowMovie } from "@/components/MoviesRender";

export default async function TopRatedMovies({
  moviesList,
}: {
  moviesList: any;
}) {
  // const moviesTopRatedList = await GetTopRatedMoviesApi();
  // const fisrtTenMovie = moviesTopRatedList.slice(0, 10);

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
            {moviesList.map((item: any) => {
              return (
                <RowMovie
                  key={item.id}
                  item={item.id}
                  handleMovie={handleMovie}
                  type="rating"
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
