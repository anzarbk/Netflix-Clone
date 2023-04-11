import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {
  action,
  originals,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
} from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall />
      <RowPost url={RomanceMovies} title="Romance Movies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
