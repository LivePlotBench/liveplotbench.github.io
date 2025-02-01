import React from "react";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Leaderboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
