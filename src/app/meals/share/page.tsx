import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { shareMeal } from "@/lib/actions";

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
        <form className="max-w-[50rem]" action={shareMeal}>
          <div className="flex gap-4">
            <p className="w-full">
              <label
                className="block mb-2 text-sm font-montserrat text-[#b3aea5] font-bold uppercase"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-xl focus:outline-[#f99f2a] focus:bg-[#1f252d]"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="w-full">
              <label
                className="block mb-2 text-sm font-montserrat text-[#b3aea5] font-bold uppercase"
                htmlFor="email"
              >
                Your email
              </label>
              <input
                className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-xl focus:outline-[#f99f2a] focus:bg-[#1f252d]"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p className="w-full">
            <label
              className="block mb-2 text-sm font-montserrat text-[#b3aea5] font-bold uppercase"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-xl focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p className="w-full">
            <label
              className="block mb-2 text-sm font-montserrat text-[#b3aea5] font-bold uppercase"
              htmlFor="summary"
            >
              Short Summary
            </label>
            <input
              className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-xl focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p className="w-full">
            <label
              className="block mb-2 text-sm font-montserrat text-[#b3aea5] font-bold uppercase"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              className="block w-full p-2 rounded border border-[#454952] bg-[#1c2027] text-[#ddd6cb] text-xl focus:outline-[#f99f2a] focus:bg-[#1f252d]"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Image picker" name="image" />
          <p className="text-right">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default Page;
