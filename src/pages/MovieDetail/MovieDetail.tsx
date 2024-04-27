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
      dispatch(fetchFilm(id))
    }
  }, []);

  console.log('film',film);
  return (
    <>
      <Header />
      <div className={s.main}>Film Detail</div>
    </>
  );
}
