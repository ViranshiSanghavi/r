// React with AJAX

import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // AJAX call using fetch
    fetch("/movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))
      //.catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Movie List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.rating}</td>
              <td>{movie.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;