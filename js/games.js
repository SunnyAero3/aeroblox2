import { supabase } from "./supabase.js";

async function loadGames() {
  let container = document.getElementById("gamesContainer");

  let { data } = await supabase.from("games").select("*");

  data.forEach(game => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${game.title}</h3>
      <button onclick="launchGame('${game.id}')">PLAY</button>
    `;

    container.appendChild(div);
  });
}
