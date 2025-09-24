import supabase from "./supabase.js";

export async function getHero() {
  const { data, error } = await supabase.from("hero_slides").select("*");
  if (error) {
    console.error(error);
    throw new Error("Slides could not be loaded");
  }
  return data;
}
