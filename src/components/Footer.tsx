import Link from "next/link";
import { FaInstagram, FaEnvelope, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="hidden md:block">
      <div className="border-mocktrial-blue font-mocktrial-montserrat border-t-5"></div>

      <footer className="bg-mocktrial-lightblue text-mocktrial-blue flex flex-col items-start p-6">
        {/* parent */}
        <div className="container mx-auto flex items-center justify-between text-4xl font-bold">
          {/* left side */}
          <p className="pl-25">Mock Trial at UCR</p>

          {/* right side */}
          <div className="ml-auto flex gap-7 pr-25">
            <Link
              href="https://www.instagram.com/ucrmocktrial"
              aria-label="Instagram"
              className="hover:text-mocktrial-yellow"
            >
              <FaInstagram className="inline-block h-8 w-8" />
            </Link>
            <Link
              href="mailto:mocktrialucr@gmail.com"
              aria-label="Email"
              className="hover:text-mocktrial-yellow"
            >
              <FaEnvelope className="inline-block h-8 w-8" />
            </Link>
            <Link
              href="https://linktr.ee/ucrmocktrial?fbclid=PAZXh0bgNhZW0CMTEAAae4LOAPDYatdDZdzOftG7SkkTRiC2YH41vIJB8O6YoK_1ieIevAETvgGIZcsw_aem_7E2TjaORacH8vCJ3rwlmeQ"
              aria-label="UCR Website"
              className="hover:text-mocktrial-yellow"
            >
              <FaLink className="inline-block h-8 w-8" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
