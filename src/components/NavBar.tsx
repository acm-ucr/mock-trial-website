"use client";

import Link from "next/link";
import Image from "next/image";
import mockLogo from "@/public/smallLogo.webp";
import navigations from "@/data/NavBarLinks";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="from-mocktrial-darkblue to-mocktrial-blue font-mocktrial-montserrat relative flex bg-gradient-to-t p-5">
      <div className="ml-2 flex-shrink-0 md:ml-10">
        <Link href="/">
          <Image
            src={mockLogo}
            alt="Mock Logo"
            width={80}
            height={80}
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </Link>
      </div>

      <div className="mr-2 ml-auto flex items-center justify-end gap-2 text-sm font-bold text-white md:ml-43 md:gap-4 md:text-xl lg:gap-25 lg:text-2xl">
        {navigations.map(({ link, name }, index) => (
          <div key={index}>
            <Link
              href={link}
              className={
                pathName === link ? "text-mocktrial-yellow" : "text-white"
              }
            >
              {name}
            </Link>
          </div>
        ))}
        <Link
          href="https://linktr.ee/ucrmocktrial?fbclid=PAZXh0bgNhZW0CMTEAAae4LOAPDYatdDZdzOftG7SkkTRiC2YH41vIJB8O6YoK_1ieIevAETvgGIZcsw_aem_7E2TjaORacH8vCJ3rwlmeQ"
          className="bg-mocktrial-yellow rounded-2xl px-2 py-1 text-sm font-bold text-white md:px-5 md:py-2 md:text-xl lg:text-2xl"
          target="_blank"
        >
          Connect
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
