// import { redis } from "@/lib/redis";

const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_HOST;

//ActorBio api
export async function GetActorBioApi(idActor: string) {
  const url = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst=" + idActor;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": rapidApiHost,
    },
  };

  try {
    //  console.log("not hit");
    // const hello_world = await redis.set("hello", "world");
    // console.log("hello_world", hello_world);
    const data = await fetch(url, options);
    const result = data.json();
    console.log("actorBio", result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
