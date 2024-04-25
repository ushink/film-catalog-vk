import { Header } from "../../components/Header/Header";
import s from "./Main.module.css";

export function Main() {
  return (
    <>
      <Header />
      <div className={s.main}>Main</div>
    </>
  );
}
