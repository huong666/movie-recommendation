export async function getMoviesSearchApi(string: string) {
  // const url = "http://127.0.0.1:3001/search?query=" + string;
  const url =
    "https://imdb-api.nguyenxuananhuong541.workers.dev/search?query=" + string;

  try {
    const response = await fetch(url, { cache: "no-store" });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
