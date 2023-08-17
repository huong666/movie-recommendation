export async function getMoviesSearchApi(string: string) {
  // const url = "http://127.0.0.1:3000/search?query=" + string;
  const url = "https://imdb-api.projects.thetuhin.com/search?query=" + string;

  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
