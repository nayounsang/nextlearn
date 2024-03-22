import { Suspense } from "react";
import MovieTrailer from "../../../../components/movie-trailer";

export default function Page({
  params,
}: {
  params?: { id: string };
  searchParams?: any;
}) {
  return (
    <Suspense fallback={<h2>loading ... </h2>}>
      <MovieTrailer id={params.id} />
    </Suspense>
  );
}
