// Optional fallback protocol method

window.openLauncher = function(gameId) {
  window.location.href = `novetus://launch?game_id=${gameId}`;
};
