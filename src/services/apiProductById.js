import supabase from "./supabase.js";

export async function apiProductById(
  productId,
  { withRelations = false } = {},
) {
  const baseSelect = withRelations
    ? `
        *,
        categories:category_id (id, name),
        tags:tag_id (id, name),
        productsList:productList_id (id, name)
      `
    : "*";

  const { data, error } = await supabase
    .from("products")
    .select(baseSelect)
    .eq("id", productId)
    .single(); // فقط یک سطر

  if (error) throw new Error("Product could not be loaded");

  if (!data) return null;

  if (withRelations) {
    return {
      ...data,
      category: data.categories?.name ?? null,
      tag: data.tags?.name ?? null,
      product_type: data.productsList?.name ?? null,
    };
  }

  return data;
}
