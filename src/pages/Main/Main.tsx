import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import s from "./Main.module.css";
import { films } from "../../mock/filmsData";

export function Main() {
  return (
    <>
      <Header />
      <main className={s.main}>
        {films.map((el) => (
          <Link to={`film/${el.id}`} key={el.id} className={s.container}>
            <div className={s.img}></div>
            <span className={s.title}>{el.name}</span>
          </Link>
        ))}
      </main>
    </>
  );
}
