import { fetchMealBySlug } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

const MealDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const meal = await fetchMealBySlug(slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      {meal !== undefined && (
        <>
          <header className="flex py-8 px-4 gap-12 m-auto max-w-7xl">
            <div className="relative w-[30rem] h-[20rem]">
              <Image
                src={meal.image}
                alt={meal.title}
                className="object-cover rounded-lg shadow-lg animate-fade-slide-in-left"
                fill
              />
            </div>
            <div className="p-4 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-right">
              <h1 className="m-0 text-4xl uppercase font-[Montserrat] text-shadow-lg">
                {meal.title}
              </h1>
              <p className="text-xl text-[#cfa69b] italic">
                by{" "}
                <a
                  href={`mailto:${meal.creator_email}`}
                  className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:text-shadow-lg"
                >
                  {meal.creator}
                </a>
              </p>
              <p className="text-xl">{meal.summary}</p>
            </div>
          </header>
          <main>
            <p
              className="text-lg leading-relaxed bg-[#6e6464] text-[#13120f] rounded-lg shadow-lg p-8 max-w-[60rem] mx-auto animate-fade-slide-in-bottom"
              dangerouslySetInnerHTML={{
                __html: meal.instructions,
              }}
            ></p>
          </main>
        </>
      )}
    </>
  );
};

export default MealDetails;
