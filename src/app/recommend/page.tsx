import RecommendationMoviesCom from "@/components/RecommendMovies";

export default async function RecommendPage() {
  return (
    <main className="py-32">
      <section className="py-5 2xl:px-56 xl:px-36 lg:px-12 px-4">
        <RecommendationMoviesCom />
      </section>
    </main>
  );
}
