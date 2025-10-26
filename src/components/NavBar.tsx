"use client";

import Link from "next/link";
import Image from "next/image";
import mockLogo from "@/public/smallLogo.webp";
import navigations from "@/data/NavBarLinks";
import { usePathname } from "next/navigation";
import homeIcon from "@/public/homeIcon.webp";
import boardIcon from "@/public/boardIcon.webp";
import trophyIcon from "@/public/trophyIcon.webp";
import faqsIcon from "@/public/faqsIcon.webp";
import connectIcon from "@/public/connectIcon.webp";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div>
      <div className="from-mocktrial-darkblue to-mocktrial-blue font-mocktrial-montserrat relative hidden bg-gradient-to-t p-5 md:flex">
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
            href="https://linktr.ee/ucrmocktrial"
            className="bg-mocktrial-yellow rounded-2xl px-5 py-2 text-2xl font-bold text-white"
            target="_blank"
          >
            Connect
          </Link>
        </div>
      </div>

      <div className="text-mocktrial-blue border-mocktrial-blue fixed bottom-4 left-1/2 z-50 flex w-9/10 -translate-x-1/2 justify-around rounded-full border-4 bg-[#CEE0FF] py-3 md:hidden">
        <Link href="/" className="flex flex-col items-center">
          <Image src={homeIcon} alt="Home Icon" width={32} height={32} />
          <div className="mt-1 text-xs font-semibold">HOME</div>
        </Link>

        <Link href="/board" className="flex flex-col items-center">
          <Image src={boardIcon} alt="Board Icon" width={32} height={32} />
          <div className="mt-1 text-xs font-semibold">BOARD</div>
        </Link>

        <Link href="/achievements" className="flex flex-col items-center">
          <Image
            src={trophyIcon}
            alt="Achievements Icon"
            width={32}
            height={32}
          />
          <div className="mt-1 text-xs font-semibold">ACHIEVEMENTS</div>
        </Link>

        <Link href="/faqs" className="flex flex-col items-center">
          <Image src={faqsIcon} alt="FAQ Icon" width={32} height={32} />
          <div className="mt-1 text-xs font-semibold">FAQs</div>
        </Link>

        <Link
          href="https://linktr.ee/ucrmocktrial"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Image src={connectIcon} alt="Connect Icon" width={32} height={32} />
          <div className="mt-1 text-xs font-semibold">CONNECT</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
