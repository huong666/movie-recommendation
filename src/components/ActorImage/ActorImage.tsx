import { ActorBioApi } from "@/api";
import Image from "next/image";

export default async function ActorImage({ actorId }: { actorId: string }) {
  const actorBio = await ActorBioApi(actorId);
  console.log(actorBio);
  return (
    <>
      <Image
        src={actorBio.image.url}
        alt=""
        width={200}
        height={250}
        className="h-[200px] rounded-xl"
      />
      <p className="mt-2">{actorBio.name}</p>
    </>
  );
}
