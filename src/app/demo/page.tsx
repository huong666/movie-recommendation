import ClientDemo from "@/components/ClientDemoCom";

export default function Demo() {
  return (
    <main className="py-20 2xl:px-56 xl:px-36 lg:px-12 px-0 pt-28">
      <section className="min-h-screen">
        <div>
          <h1 className="text-xl font-medium">
            Choose the type of movie that we can recommend
          </h1>
        </div>
        <ClientDemo />
      </section>
    </main>
  );
}
