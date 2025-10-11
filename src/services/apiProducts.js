import supabase from "./supabase.js";

export async function apiProducts({ withRelations = false } = {}) {
  const baseSelect = withRelations
    ? `
        *,
        categories:category_id (id, name),
        tags:tag_id (id, name),
        productsList:productList_id (id, name)
      `
    : "*";

  const { data, error } = await supabase.from("products").select(baseSelect);

  console.log("🟢 Supabase data:", data);
  console.log("🔴 Supabase error:", error);

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error("Products could not be loaded");
  }

  if (!data || !Array.isArray(data)) return [];

  if (withRelations) {
    return data.map((product) => ({
      ...product,
      category: product.categories?.name ?? null,
      tag: product.tags?.name ?? null,
      product_type: product.productsList?.name ?? null,
    }));
  }

  return data;
}
