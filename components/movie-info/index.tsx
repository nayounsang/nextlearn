import Image from "next/image";
import Link from "next/link";
import { API_URL } from "../../const/url";
import {
  containerStyle,
  infoStyle,
  posterStyle,
  titleStyle,
} from "./movie-info.css";

async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={containerStyle}>
      <Image
        src={movie.poster_path}
        alt={movie.title}
        width={1000}
        height={400}
        className={posterStyle}
      />
      <div className={infoStyle}>
        <h1 className={titleStyle}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <Link href={movie.homepage} target="_blank">
          Detail &rarr;
        </Link>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
