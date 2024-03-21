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
      <Image
        src={imgURL}
        alt={title}
        className={imageStyle}
        width={100}
        height={100}
      />
      <Link href={`/movies/${id}`} className={textStyle}>
        {title}
      </Link>
    </li>
  );
}
