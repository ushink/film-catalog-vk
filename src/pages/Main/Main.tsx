import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import s from "./Main.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { fetchMovies } from "../../store/actions/moviesAction";

export function Main() {
  const dispatch = useAppDispatch();

  const { movies } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <Header />
      <main className={s.main}>
        {!movies.length && (
          <div className={s.loading}>Loading... Check you VPN connection</div>
        )}
        {movies.map((el) => (
          <Link to={`film/${el.id}`} key={el.id} className={s.container}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}
              alt={el.title}
            />
            <span className={s.title}>
              {el.original_title ? el.original_title : el.title}
            </span>
          </Link>
        ))}
      </main>
    </>
  );
}
