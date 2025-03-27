import postgres from "postgres";
import { Meal, SharedMeal } from "./definitions";
import slugify from "slugify";
import xss from "xss";
import { uploadImageToCloudinary } from "./helpers";

const sql = postgres(process.env.FOODIES_POSTGRES_URL!, { ssl: "require" });

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

export async function saveMeal(meal: SharedMeal) {
  const slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  try {
    const imageUrl = await uploadImageToCloudinary(meal.image, slug);

    await sql`
          INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
          VALUES (${slug}, ${meal.title}, ${imageUrl}, ${meal.summary}, ${meal.instructions}, ${meal.creator}, ${meal.creator_email})
        `;
  } catch (error) {
    console.error("Error saving meal:", error);
    throw new Error("Failed to save meal");
  }
}
