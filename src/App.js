import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://modest-khorana-3d01c6.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sarah Whibley
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/swhibley12/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
