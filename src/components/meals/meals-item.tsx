import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

const MealsItem = ({ title, slug, image, summary, creator }: Props) => {
  return (
    <article className="flex flex-col justify-between h-full rounded shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-[15rem]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="pt-2 pb-0 px-4">
          <h2 className="m-0 text-2xl font-['Montserrat']">{title}</h2>
          <p className="m-0 text-md text-[#cfa69b] italic">by {creator}</p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-4 px-4 pb-0">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="inline-block mt-4 p-2 rounded bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealsItem;
