import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import s from "./MovieDetail.module.css";
import { useEffect } from "react";
import { fetchFilm } from "../../store/actions/moviesAction";

export function MovieDetail() {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const { film } = useAppSelector((state) => state.movies);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, []);

  return (
    <>
      <Header />
      <main className={s.main}>
        {!film && (
          <div className={s.loading}>Loading... Check you VPN connection</div>
        )}
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${film?.poster_path}`}
          alt={film?.title}
        />
        <div className={s.textBox}>
          <p className={s.title}>{film?.title}</p>
          <p className={s.overview}>{film?.overview}</p>
        </div>
      </main>
    </>
  );
}
