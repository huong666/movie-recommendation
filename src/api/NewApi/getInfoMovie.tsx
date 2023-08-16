export async function getInfoMovie(idMovie: string) {
  const url = "http://127.0.0.1:3000/title/" + idMovie;

  try {
    const result = await fetch(url).then((res) => {
      return res.json();
    });
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
