import { Metadata } from "next";
import { API_URL } from "../../const/url";
import MovieElement from "../../components/movie-element";

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
        <MovieElement
          key={movie.id}
          id={movie.id}
          title={movie.title}
          imgURL={movie.poster_path}
        />
      ))}
    </ul>
  );
}
