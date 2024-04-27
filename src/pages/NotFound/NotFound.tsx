import { Header } from "../../components/Header/Header";
import s from "./NotFound.module.css";

export function NotFound() {
  return (
    <>
      <Header />
      <main className={s.main}>NotFound 404</main>
    </>
  );
}
