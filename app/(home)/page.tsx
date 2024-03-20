import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "home",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const res = await fetch(URL, { next: { revalidate: 120 } });
  return res.json();
}

export default async function Page() {
  const movies = await getMovies();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
