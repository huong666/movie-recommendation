import Image from "next/image";

export default function InfoActor() {
  return (
    <main>
      <div className="py-16 px-20 pt-28">
        <Image src="/sri.jpg" alt="" width={230} height={300} />
        <div>
          Introduce
          <p>Ryan Gosling</p>
          <p>Highest Rated: 93% Drive (2011) </p>
          <p>Lowest Rated: 26% Stay (2005) </p>
          <p>Birthday: Nov 12, 1980 </p>
          <p>Birthplace: London, Ontario, Canada </p>
          <p>
            Text collapsed. Before becoming one of the most bankable romantic
            leads of his generation, Ryan Gosling established himself with
            misfit outsider roles in award-winning independent films like "The
            Believer" (2001), "Half Nelson" (2006) and "Lars and the Real Girl"
            (2007), with a believability that could only come from someone who
            had struggled with unease and dissatisfaction in their own
          </p>
        </div>
      </div>
    </main>
  );
}
