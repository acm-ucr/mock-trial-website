import Image from "next/image";
import AbinayaHariharan from "@/public/board/abinaya_hariharan.webp";
import SriVidyaCharepalli from "@/public/board/sri_vidya_charepalli.webp";

const BoardThirdRow = () => {
  return (
    <div className="text-mocktrial-darkblue flex flex-col items-center justify-center gap-20 p-30 text-center md:flex-row">
      <div className="flex flex-col">
        <div className="from-mocktrial-yellow mb-6 h-88 w-88 rounded-4xl bg-gradient-to-b to-amber-100" />
        <p className="flex flex-row gap-6 text-4xl font-bold">
          Abinaya Hariharan
        </p>
        <p className="flex flex-row justify-center gap-26 text-2xl font-semibold">
          Co-Fundraising Chair
        </p>
      </div>

      <div className="absolute mr-112 mb-87 w-114">
        <Image
          src={AbinayaHariharan}
          alt="Abinaya Hariharan"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="from-mocktrial-yellow mb-6 h-88 w-88 rounded-4xl bg-gradient-to-b to-amber-100" />
        <p className="flex flex-row gap-6 text-4xl font-bold">
          Sri Vidya Charepalli
        </p>
        <p className="flex flex-row justify-center gap-26 text-2xl font-semibold">
          Co-Fundraising Chair
        </p>
      </div>
      <div className="absolute mb-42 ml-102 w-82">
        <Image
          src={SriVidyaCharepalli}
          alt="Sri Vidya Charepalli"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default BoardThirdRow;
