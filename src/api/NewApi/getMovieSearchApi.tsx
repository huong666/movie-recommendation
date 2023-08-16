export async function getMoviesSearchApi() {
  const url = "http://127.0.0.1:3000/search?query=meat";

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
