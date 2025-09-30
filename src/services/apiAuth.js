import supabase from "./supabase.js";

// Signup
export async function apiSignup({ email, password, agreeToPrivacy }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        agreeToPrivacy: !!agreeToPrivacy, // حتماً بولین
      },
    },
  });
  if (error) {
    console.error(error);
    if (error.message.includes("User already registered")) {
      // پیام واضح برای کاربر
      throw new Error(
        "This email is already registered. Please sign in instead.",
      );
    }
    throw new Error(error.message);
  }
  return data;
}

// SignIn
export async function apiSignIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

//getUser
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data.user ?? null;
}

//SignOut
export async function apiSignOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
