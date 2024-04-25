import { Header } from "../../components/Header/Header";
import s from "./MovieDetail.module.css";

export function MovieDetail() {
  return (
    <>
      <Header />
      <div className={s.main}>Film Detail</div>
    </>
  );
}
