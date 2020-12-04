import React from "react";
import requests from "../requests";
import "../styles/Nav.css";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedy)}>Comedy</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomance)}>Romance</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAction)}>Action</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchCrime)}>Crime</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorror)}>Horror</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTv)}>Movies</h2>
    </div>
  );
}

export default Nav;
