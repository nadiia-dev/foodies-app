import ImageSlider from "@/components/slider";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] m-w-[75rem]">
        <div className="w-[40rem] h-[25rem]">
          <ImageSlider />
        </div>
        <div>
          <div className="text-2xl text-amber-100">
            <h1 className="text-2xl font-bold font-[Montserrat] tracking-widest uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-4 text-[1.5rem]">
            <Link
              href="/community"
              className="inline-block mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241]"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-orange-200 text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-orange-200 text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center">
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
