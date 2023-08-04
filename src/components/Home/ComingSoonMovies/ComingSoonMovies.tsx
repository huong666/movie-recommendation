import { moviesComingSoonApi } from "@/api";
import MovieName from "@/components/MovieName";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default async function ComingSoonMoviesApi() {
  const comingSoonMoviesList = await moviesComingSoonApi();
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
