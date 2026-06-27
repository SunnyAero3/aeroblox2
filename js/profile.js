import { supabase } from "./supabase.js";

window.loadProfile = async function() {
  const { data } = await supabase.auth.getUser();
  username.innerText = data.user.email;
};

window.updateProfile = async function() {
  const { data } = await supabase.auth.getUser();

  await supabase.from("profiles").update({
    username: newName.value
  }).eq("id", data.user.id);
};
