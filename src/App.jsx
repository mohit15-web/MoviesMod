import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import ShowMovies from "./components/ShowMovies";
import TvShows from "./components/TvShows";
import ShowDetails from "./components/ShowDetails";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
    <Search/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<ShowMovies />} />
      <Route path="/tv" element={<TvShows />} />
      <Route path="/Details/:id" element={<ShowDetails/>} />
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
