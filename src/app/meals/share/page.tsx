import ShareMealForm from "@/components/meals/share-meal-form";

export const metadata = {
  title: "Share meal",
  description: "Share your favourite meal",
};

const Page = () => {
  return (
    <>
      <header className="gap-12 mx-auto my-12 max-w-[75rem] w-[90%] text-[#ddd6cb] text-xl">
        <h1 className="font-[montserrat]">
          Share your{" "}
          <span className="text-transparent bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text">
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="mx-auto my-12 max-w-[75rem] w-[90%] text-white">
        <ShareMealForm />
      </main>
    </>
  );
};

export default Page;
