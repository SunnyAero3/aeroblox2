import { supabase } from "./supabase.js";

async function loadProfile() {
  let { data } = await supabase.auth.getUser();
  document.getElementById("username").innerText = data.user.email;
}

async function updateProfile() {
  let newName = document.getElementById("newName").value;

  await supabase.from("profiles").update({
    username: newName
  }).eq("id", (await supabase.auth.getUser()).data.user.id);
}
