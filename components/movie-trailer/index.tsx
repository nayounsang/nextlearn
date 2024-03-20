import { API_URL } from "../../const/url";

async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieTrailer({ id }: { id: string }) {
  const movie = await getVideos(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
