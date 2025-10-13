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
      <div className="ml-10">
        <Link href="/">
          <Image src={mockLogo} alt="Mock Logo" width={80} />
        </Link>
      </div>

      <div className="ml-43 flex items-center justify-center gap-25 text-2xl font-bold text-white">
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
          className="bg-mocktrial-yellow rounded-2xl px-5 py-2 text-2xl font-bold text-white"
          target="_blank"
        >
          Connect
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
