import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "../nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
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
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
