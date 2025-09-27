import supabase from "./supabase.js";

export async function getFaqs() {
  let { data, error } = await supabase.from("faqs").select("*");
  if (error) {
    console.error(error);
    throw new Error("faqs could not be loaded");
  }
  return data;
}
