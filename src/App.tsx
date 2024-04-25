import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { NotFound } from "./pages/NotFound/NotFound";
import { MovieDetail } from "./pages/MovieDetail/MovieDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/film/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
