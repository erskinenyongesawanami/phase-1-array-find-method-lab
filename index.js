function superbowlWin(record) {
  const winRecord = record.find(game => game.result === "W");
  return winRecord ? winRecord.year : undefined;
}

// Export the function so it's available to the test file
module.exports = superbowlWin;
