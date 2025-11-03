import Image from "next/image";
import AbinayaHariharan from "@/public/board/abinaya_hariharan.webp";
import SriVidyaCharepalli from "@/public/board/sri_vidya_charepalli.webp";

const BoardThirdRow = () => {
  return (
    <div className="text-mocktrial-darkblue flex flex-col items-center justify-center gap-20 p-30 text-center md:flex-row">
      <div className="flex flex-col">
        <div className="mb-6 h-90 w-88 rounded-4xl bg-gradient-to-b from-[#e3b858] to-[#e9ce93]" />
        <p className="flex flex-row justify-center text-2xl font-bold md:text-4xl">
          Abinaya Hariharan
        </p>
        <p className="flex flex-row justify-center text-lg font-semibold md:text-2xl">
          Co-Fundraising Chair
        </p>
      </div>

      <div className="absolute w-114 -translate-y-107 md:-translate-x-57 md:-translate-y-43">
        <Image
          src={AbinayaHariharan}
          alt="Abinaya Hariharan"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="mb-6 h-90 w-88 rounded-4xl bg-gradient-to-b from-[#e3b858] to-[#e9ce93]" />
        <p className="flex flex-row justify-center text-2xl font-bold whitespace-nowrap md:text-4xl">
          Sri Vidya Charepalli
        </p>
        <p className="flex flex-row justify-center text-lg font-semibold md:text-2xl">
          Co-Fundraising Chair
        </p>
      </div>
      <div className="absolute mr-5 w-82 translate-y-47 md:translate-x-50 md:-translate-y-20">
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
