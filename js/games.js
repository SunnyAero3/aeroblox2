import { supabase } from "./supabase.js";

window.loadGames = async function() {
  const container = document.getElementById("gamesContainer");

  const { data } = await supabase.from("games").select("*");

  data.forEach(game => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${game.title}</h3>
      <button onclick="launchGame('${game.id}')">PLAY</button>
    `;

    container.appendChild(div);
  });
};
