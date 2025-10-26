import Image from "next/image";
import AbinayaHariharan from "@/public/board/abinaya_hariharan.webp";
import SriVidyaCharepalli from "@/public/board/sri_vidya_charepalli.webp";

const BoardThirdRow = () => {
  return (
    <div className="text-mocktrial-darkblue flex flex-col items-center justify-center gap-20 py-40 text-center md:flex-row">
      <div className="flex flex-col">
        <div className="mb-6 h-90 w-88 rounded-3xl bg-gradient-to-b from-[#e3b858] to-[#e9ce93]" />
        <p className="flex flex-row justify-center text-2xl font-bold md:text-3xl">
          Abinaya Hariharan
        </p>
        <p className="flex flex-row justify-center text-lg font-semibold md:text-2xl">
          Co-Fundraising Chair
        </p>
      </div>

      <div className="absolute mb-214 w-114 md:mr-112 md:mb-85">
        <Image
          src={AbinayaHariharan}
          alt="Abinaya Hariharan"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="mb-6 h-90 w-88 rounded-3xl bg-gradient-to-b from-[#e3b858] to-[#e9ce93]" />
        <p className="flex flex-row justify-center text-2xl font-bold whitespace-nowrap md:text-3xl">
          Sri Vidya Charepalli
        </p>
        <p className="flex flex-row justify-center text-lg font-semibold md:text-2xl">
          Co-Fundraising Chair
        </p>
      </div>
      <div className="absolute mt-94 w-82 md:mt-0 md:mb-39 md:ml-102">
        <Image
          src={SriVidyaCharepalli}
          alt="Sri Vidya Charepalli"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default BoardThirdRow;
