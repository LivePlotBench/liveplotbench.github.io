function getLeaderboard(performances, models, startDate, endDate) {
  return models
    .map((model) => {
      const results = performances.filter(
        (result) =>
          result.model === model.model_repr &&
          result.date >= startDate &&
          result.date <= endDate
      );

      const runnability = results.reduce((sum, result) => sum + result.runnability, 0) / results.length;
      const correctness = results.reduce((sum, result) => sum + result.correctness, 0) / results.length;
      const aesthetics = results.reduce((sum, result) => sum + result.aesthetics, 0) / results.length;
      const totalScore = runnability * 0.2 + correctness * 0.5 + aesthetics * 0.3;

      return {
        Model: model.model_repr,
        Runnability: runnability.toFixed(2),
        Correctness: correctness.toFixed(2),
        Aesthetics: aesthetics.toFixed(2),
        TotalScore: totalScore.toFixed(2),
      };
    })
    .sort((a, b) => b.TotalScore - a.TotalScore)
    .map((model, index) => ({ Rank: index + 1, ...model }));
}

function getDateMarksFromTimestamps(timestamps) {
  return timestamps.map((timestamp) => ({
    value: timestamp,
    label: new Date(timestamp).toLocaleDateString(undefined, {
      timeZone: "UTC",
    }),
  }));
}

export { getLeaderboard, getDateMarksFromTimestamps };
