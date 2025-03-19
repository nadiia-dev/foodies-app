import postgres from "postgres";
import { Meal, SharedMeal } from "./definitions";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

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

export async function saveMeal(meal: SharedMeal) {
  const slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extention = meal.image.name.split(".").pop();
  const fileName = `${slug}.${extention}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (e) => {
    if (e) {
      throw new Error("Failed to save image");
    }
  });

  try {
    await sql`
        INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
        VALUES (${slug}, ${meal.title}, ${`/images/${fileName}`}, ${
      meal.summary
    }, ${meal.instructions}, ${meal.creator}, ${meal.creator_email})
      `;
  } catch (e) {
    console.error("Database Error:", e);
    throw new Error("Failed to save meal");
  }
}
