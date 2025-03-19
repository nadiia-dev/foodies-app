import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listMeals() {
  const data = await sql`
    SELECT * FROM meals
  `;

  return data;
}

export async function GET() {
  try {
    return Response.json(await listMeals());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
