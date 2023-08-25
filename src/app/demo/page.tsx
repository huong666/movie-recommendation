import ClientDemo from "@/components/ClientDemoCom";

export default function Demo() {
  return (
    <main className="py-20 2xl:px-52 xl:px-32 lg:px-8 px-0 pt-28">
      <section className="min-h-screen">
        <div>
          <h1>Choose the type of movie that we can recommend</h1>
        </div>
        <ClientDemo />
      </section>
    </main>
  );
}
