import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export const metadata = {
  title: "HOME",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default function HomePage() {
  return <div>{JSON.stringify("test")}</div>;
  /*
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );*/
}
