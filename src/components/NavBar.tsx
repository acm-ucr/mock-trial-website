"use client";

import Link from "next/link";
import Image from "next/image";
import mockLogo from "@/public/smallLogo.webp";
import navigations from "@/data/NavBarLinks";
import { usePathname } from "next/navigation";
import { LiaHomeSolid } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { LuTrophy } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
      <div className="from-mocktrial-darkblue to-mocktrial-blue font-mocktrial-montserrat relative hidden bg-gradient-to-t p-5 md:flex">
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

        <div className="mr-2 ml-auto flex items-center justify-end gap-4 text-sm font-bold text-white md:ml-43 md:gap-4 md:text-xl lg:gap-25 lg:text-2xl">
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

      <div className="text-mocktrial-blue border-mocktrial-blue fixed bottom-8 left-1/2 z-50 flex w-[90%] max-w-md -translate-x-1/2 justify-around rounded-full border-4 bg-[#CEE0FF] py-3 md:hidden">
        <Link href="/" className="flex flex-col items-center">
          <LiaHomeSolid size={20} />
          <div className="mt-1 text-xs font-semibold">HOME</div>
        </Link>

        <Link href="/board" className="flex flex-col items-center">
          <AiOutlineTeam size={20} />
          <div className="mt-1 text-xs font-semibold">BOARD</div>
        </Link>

        <Link href="/achievements" className="flex flex-col items-center">
          <LuTrophy size={20} />
          <div className="mt-1 text-xs font-semibold">ACHIEVEMENTS</div>
        </Link>

        <Link href="/faqs" className="flex flex-col items-center">
          <FaRegQuestionCircle size={20} />
          <div className="mt-1 text-xs font-semibold">FAQs</div>
        </Link>

        <Link
          href="https://linktr.ee/ucrmocktrial?fbclid=PAZXh0bgNhZW0CMTEAAae4LOAPDYatdDZdzOftG7SkkTRiC2YH41vIJB8O6YoK_1ieIevAETvgGIZcsw_aem_7E2TjaORacH8vCJ3rwlmeQ"
          className="flex flex-col items-center"
          target="_blank"
        >
          <BiLinkAlt size={20} />
          <div className="mt-1 text-xs font-semibold">CONNECT</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
