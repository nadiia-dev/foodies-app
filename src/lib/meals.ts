import postgres from "postgres";
import { Meals } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchMeals() {
  try {
    const res = await sql<Meals[]>`SELECT * FROM meals`;
    return res;
  } catch (e) {
    console.error("Database Error:", e);
    throw new Error("Failed to fetch revenue data.");
  }
}
