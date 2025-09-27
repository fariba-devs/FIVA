import supabase from "./supabase.js";

export async function addNewsletter(email) {
  const { data, error } = await supabase.from("newsletter").insert([{ email }]);

  if (error) {
    console.error(error);
    throw new Error("Newsletter could not be loaded");
  }
  return data;
}
