import { useState } from "react";
import requests from "../requests";
import "../styles/App.css";
import Header from "./Header";
import Nav from "./Nav";
import Results from "./Results";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
