import supabase from "./supabase.js";

export async function addContactsectoion({
  name,
  email,
  message,
  Phone,
  Subject,
}) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert([{ name, email, message, Phone, Subject }]);

  if (error) {
    console.error(error);
    throw new Error("Contact could not be loaded");
  }
  return data;
}
