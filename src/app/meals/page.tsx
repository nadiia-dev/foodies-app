import MealsGrid from "@/components/meals/meals-grid";
import { fetchMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";

const Page = async () => {
  const meals = await fetchMeals();

  return (
    <>
      <header className="gap-12 my-12 mx-auto mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl">
        <h1 className="font-[Montserrat]">
          Delicious meals, created{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="m-0">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p>
          <Link
            href="/meals/share"
            className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={
            <p className="text-center animate-[loading_1.2s_ease-in-out_infinite]">
              Fetching meals...
            </p>
          }
        >
          <MealsGrid meals={meals} />
        </Suspense>
      </main>
    </>
  );
};

export default Page;
