import { supabase } from "./supabase.js";

window.login = async function() {
  const email = email.value;
  const password = password.value;

  await supabase.auth.signInWithPassword({ email, password });

  window.location.href = "home.html";
};

window.signup = async function() {
  const email = email.value;
  const password = password.value;

  await supabase.auth.signUp({ email, password });
};
