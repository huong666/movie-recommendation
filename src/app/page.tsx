import MostPopularMovies from "@/components/Home/MPMovies";

export default function Home() {
  // // const data = await getData();

  return (
    <main className="min-h-screen p-24">
      <MostPopularMovies />
      <section>
        <h1>Most Popular TV Shows</h1>
      </section>
      <section>
        <h1>Movies Awards</h1>
      </section>
      <section>
        <h1>Coming Soon Movies</h1>
      </section>
    </main>
  );
}
