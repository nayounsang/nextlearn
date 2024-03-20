import { Metadata } from "next";
import Link from "next/link";
import { API_URL } from "../../const/url";

export const metadata: Metadata = {
  title: "home",
};

async function getMovies() {
  const res = await fetch(API_URL, { next: { revalidate: 120 } });
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
