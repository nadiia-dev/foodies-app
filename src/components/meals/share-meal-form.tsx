"use client";
import { useActionState } from "react";
import ImagePicker from "./image-picker";
import MealsFormSubmit from "./meals-form-submit";
import { shareMeal } from "@/lib/actions";

const ShareMealForm = () => {
  const [state, formAction, isPending] = useActionState<
    string | null,
    FormData
  >(async (_prevState, formData) => {
    try {
      await shareMeal(formData);
      return null;
    } catch (error) {
      return (error as Error).message;
    }
  }, null);
  return (
    <form className="max-w-[50rem]" action={formAction}>
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
      {state && !isPending && <p>{state}</p>}
      <p className="text-right">
        <MealsFormSubmit />
      </p>
    </form>
  );
};

export default ShareMealForm;
