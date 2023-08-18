export async function getMoviesSearchApi(string: string) {
  const url = "http://127.0.0.1:3000/search?query=" + string;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
