"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";
import clsx from "clsx";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

const ImageSlider = () => {
  const [curImage, setCurImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurImage((prevImage) =>
        prevImage < images.length - 1 ? prevImage + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  console.log(curImage);

  return (
    <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden box-shadow-[0_0_0.5rem_rgba(0,0,0,0.5)]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={clsx(
            "w-[100%] h-[100%] object-cover absolute top-0 left-0 opacity-0 transform scale-110 -translate-x-4 -rotate-5 transition-all duration-500 ease-in-out",
            curImage === index &&
              "z-[1] opacity-100 scale-100 translate-x-0 rotate-0"
          )}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
