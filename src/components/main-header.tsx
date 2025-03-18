import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header className="flex justify-between items-center p-8 sm:px-[10%]">
      <Link
        href="/"
        className="logo flex items-center justify-center gap-8 text-[#ddd6cb] font-bold font-[Montserrat] tracking-widest uppercase text-2xl no-underline"
      >
        <Image
          src={logoImg.src}
          alt="page logo"
          priority
          width={100}
          height={100}
          className="object-contain drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.5)]"
        />
        Next Level Food
      </Link>
      <nav>
        <ul className="list-none m-0 p-0 flex gap-6 text-[1.25rem]">
          <li>
            <Link
              href="/meals"
              className="text-[#ddd6cb] font-bold px-2 py-1 rounded-md no-underline hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-[#ddd6cb] font-bold px-2 py-1 rounded-md no-underline hover:bg-gradient-to-r from-[#ff8a05] to-[#f9b331] hover:bg-clip-text hover:text-transparent hover:shadow-[0_0_18px_rgba(248,190,42,0.8)]"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
