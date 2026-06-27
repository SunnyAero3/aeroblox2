import { supabase } from "./supabase.js";

window.launchGame = async function(gameId) {

  const { data: session } = await supabase.auth.getSession();

  if (!session?.session) return;

  await fetch("http://127.0.0.1:49152/launch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      game_id: gameId,
      user_id: session.session.user.id,
      session_token: session.session.access_token
    })
  });

};
