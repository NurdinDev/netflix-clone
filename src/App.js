import React from "react";
import "./App.css";
import { Row } from "./components/Row";
import requests from "./request";
import { Banner } from "./components/Banner";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
