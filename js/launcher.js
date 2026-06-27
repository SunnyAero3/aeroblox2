import { supabase } from "./supabase.js";

window.launchGame = async function(gameId) {
  let session = await supabase.auth.getSession();

  fetch("http://127.0.0.1:49152/launch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: session.data.session.user.id,
      game_id: gameId,
      session_token: session.data.session.access_token
    })
  });
};
