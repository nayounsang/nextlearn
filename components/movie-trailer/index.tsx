"use-client";

import { API_URL } from "../../const/url";
import { containerStyle, videoStyle } from "./movie-trailer.css";

async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieTrailer({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={containerStyle}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow={`
            accelerometer;
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; `}
          allowFullScreen
          className={videoStyle}
        />
      ))}
    </div>
  );
}
