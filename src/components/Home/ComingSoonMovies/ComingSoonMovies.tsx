import RowMovie from "@/components/MoviesRender/RowMovie";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { handleMovie } from "@/lib/serverFun";
import Link from "next/link";

export default async function ComingSoonMoviesApi({
  moviesList,
}: {
  moviesList: any;
}) {
  // const comingSoonMoviesList = await GetComingSoonMoviesApi();
  // const fisrtTenMovie = comingSoonMoviesList.slice(0, 10);
  // console.log(fisrtTenMovie);

  return (
    <section className="">
      <div className="flex justify-between p-4">
        <h1 className="font-semibold">COMING SOON MOVIES</h1>
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
                  type="releasedate"
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
