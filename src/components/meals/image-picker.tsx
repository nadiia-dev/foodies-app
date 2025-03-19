"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string>("");

  const imageInput = useRef<HTMLInputElement>(null);
  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPickedImage("");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.result !== null) {
        setPickedImage(fileReader.result as string);
      }
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-6 mb-4">
        <div className="w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {pickedImage === "" && (
            <p className="m-0 p-4">No image picked yet.</p>
          )}
          {pickedImage !== "" && (
            <Image
              src={pickedImage}
              className="object-cover"
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
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
