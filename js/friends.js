import { supabase } from "./supabase.js";

window.sendRequest = async function() {
  const { data } = await supabase.auth.getUser();

  await supabase.from("friend_requests").insert({
    from_user: data.user.id,
    to_user: friendId.value
  });
};

window.loadFriends = async function() {
  const { data } = await supabase.from("friends").select("*");

  friendsList.innerHTML = data.map(f =>
    `<div class="card">${f.friend_id}</div>`
  ).join("");
};
