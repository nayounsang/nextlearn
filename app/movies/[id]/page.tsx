import { Metadata } from "next";
import MovieInfo from "../../../components/movie-info";
import MovieTrailer from "../../../components/movie-trailer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "movie",
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  return (
    <div>
      <Suspense fallback={<h1>loading movie...</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h6>loading trailer...</h6>}>
        <MovieTrailer id={params.id} />
      </Suspense>
    </div>
  );
}
