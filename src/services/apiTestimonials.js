import supabase from "./supabase.js";

export async function getTestimonials() {
  let { data, error } = await supabase.from("testimonials").select("*");
  if (error) {
    console.error(error);
    throw new Error("testimonials could not be loaded");
  }
  return data;
}
