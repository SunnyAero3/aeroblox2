import { supabase } from "./supabase.js";

async function sendRequest() {
  let target = document.getElementById("friendId").value;

  await supabase.from("friend_requests").insert({
    to_user: target
  });
}

async function loadFriends() {
  let { data } = await supabase.from("friends").select("*");
  document.getElementById("friendsList").innerHTML =
    data.map(f => `<div class="card">${f.friend_id}</div>`).join("");
}
