import postgres from "postgres";
import { Meal } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchMeals() {
  try {
    const res = await sql<Meal[]>`SELECT * FROM meals`;
    return res;
  } catch (e) {
    console.error("Database Error:", e);
    throw new Error("Failed to fetch meals data.");
  }
}

export async function fetchMealBySlug(slug: string) {
  try {
    const res = await sql<Meal[]>`SELECT * FROM meals WHERE slug = ${slug}`;
    return res.length > 0 ? res[0] : undefined;
  } catch (e) {
    console.error("Database Error:", e);
    throw new Error("Failed to fetch meal data.");
  }
}
