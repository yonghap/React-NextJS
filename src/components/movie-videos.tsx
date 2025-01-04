import { API_URL } from "../app/constants";
import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.co/embed/${video.key}`}
          title={video.name}
        />
      ))}
    </div>
  );
}
