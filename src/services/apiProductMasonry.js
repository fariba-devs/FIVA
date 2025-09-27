import supabase from "./supabase.js";

export async function getProductMasonry() {
  let { data, error } = await supabase.from("ProductMasonry").select("*");
  if (error) {
    console.error(error);
    throw new Error("ProductMasonry could not be loaded");
  }
  return data;
}
