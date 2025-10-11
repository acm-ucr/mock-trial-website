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

      <div className="mt-5 ml-43 flex justify-center gap-25 text-2xl font-bold text-white">
        {navigations.map(({ link, name }, index) => (
          <div key={index}>
            <Link
              href={link}
              target="_blank"
              className={
                name === "Connect"
                ? "bg-mocktrial-yellow rounded-2xl px-5 py-2 text-white"
                : pathName === link
                ? "text-mocktrial-yellow"
                : "text-white"
              }
            >
              {name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
