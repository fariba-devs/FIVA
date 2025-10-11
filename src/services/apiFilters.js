import supabase from "./supabase.js";

export async function apiCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error(error);
    throw new Error("categories could not be loaded");
  }
  return data;
}

export async function apiProductsList() {
  const { data, error } = await supabase.from("productsList").select("*");

  if (error) {
    console.error(error);
    throw new Error("productsList could not be loaded");
  }
  return data;
}

export async function apiTags() {
  const { data, error } = await supabase.from("tags").select("*");

  if (error) {
    console.error(error);
    throw new Error("tags could not be loaded");
  }
  return data;
}
