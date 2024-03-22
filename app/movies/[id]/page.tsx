import { Metadata } from "next";
import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";

export const metadata: Metadata = {
  title: "movie",
};

export default function Page({
  params,
}: {
  params?: { id: string };
  searchParams?: any;
}) {
  return (
    <Suspense fallback={<h1>loading movie...</h1>}>
      <MovieInfo id={params.id} />
    </Suspense>
  );
}
