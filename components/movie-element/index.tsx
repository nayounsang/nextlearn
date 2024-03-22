"use client";

import Link from "next/link";
import Image from "next/image";
import { containerStyle, imageStyle, textStyle } from "./movie-element.css";

export default function MovieElement({
  imgURL,
  title,
  id,
}: {
  imgURL: string;
  title: string;
  id: string;
}) {
  return (
    <li className={containerStyle}>
      <Link href={`/movies/${id}`} className={textStyle}>
        <Image
          src={imgURL}
          alt={title}
          width={1000}
          height={300}
          className={imageStyle}
        />
        {title}
      </Link>
    </li>
  );
}
