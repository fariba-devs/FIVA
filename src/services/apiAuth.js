import supabase from "./supabase.js";

// apiSignup *************************************************************************
export async function apiSignup({ email, password, agreeToPrivacy }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        agreeToPrivacy: !!agreeToPrivacy, // change to boolean :آیا کاربر قوانین رو قبول کرده؟
      },
    },
  });
  if (error) {
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

// SignIn *************************************************************************
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

// getCurrentUser *******************************************************************
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession(); // فقط session رو از localStorage میخونه (سریع)
  if (!session.session) return null; //اگر هیچ session فعالی وجود ندارد (یعنی کاربر لاگین نیست)

  const { data, error } = await supabase.auth.getUser(); //از سرور اطلاعات fresh کاربر رو میگیره (دقیق‌تر)

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data.user ?? null;
}

// apiSignOut *********************************************************************
export async function apiSignOut() {
  const { error } = await supabase.auth.signOut(); //1. Session از Supabase پاک میشه - 2. localStorage پاک میشه - 3. Cookies مربوطه حذف میشن
  if (error) throw new Error(error.message);
}
