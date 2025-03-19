"use client";
import { useRef } from "react";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const handlePickClick = () => {
    imageInput.current?.click();
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-6 mb-4">
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className="border-0 py-2 px-6 bg-[#a4abb9] rounded cursor-pointer font-inherit hover:bg-[#b3b9c6] focus:outline-none"
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
