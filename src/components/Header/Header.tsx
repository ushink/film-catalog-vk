import { Link } from "react-router-dom";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/"> Movie LOVE</Link>
      </div>
    </header>
  );
}
