import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Row } from "react-bootstrap";
import Artist from "./components/Artist";
import Album from "./components/Album";
import { useState } from "react";

let headers = new Headers({
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
});

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = async (string) => {
    if (string.length > 2) {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            string,
          {
            method: "GET",
            headers,
          }
        );

        let result = await response.json();
        let songs = result.data;

        setSearchResults(songs);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Router>
      <div className="container-fluid">
        <Row>
          <Sidebar search={search} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home searchResults={searchResults} />}
            />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/album/:id" element={<Album />} />
          </Routes>
        </Row>
      </div>
      <Player />
    </Router>
  );
}

export default App;

