const env = require("dotenv").config().parsed;
const rapidApiKey = env.X_RAPIDAPI_KEY;
const rapidApiHost = env.X_RAPIDAPI_Host;

//ActorBio api
export async function ActorBioApi(idActor: string) {
  const url = "https://imdb8.p.rapidapi.com/actors/get-bio?nconst=" + idActor;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": rapidApiHost,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
