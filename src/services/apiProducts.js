import supabase from "./supabase.js";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("products could not be loaded");
  }
  return data;
}
