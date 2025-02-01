import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>LivePlotBench</h1>
        <nav>
          <a href="/">🏠 Home</a>
          <a href="/leaderboard">🏆 Leaderboard</a>
          <a href="https://github.com/LivePlotBench/LivePlotBench">💻 Code</a>
          <a href="https://huggingface.co/datasets/liveplotbench/">📊 Data</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
