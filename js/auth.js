import { supabase } from "./supabase.js";

async function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (!error) window.location.href = "home.html";
}

async function signup() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  await supabase.auth.signUp({ email, password });
}
