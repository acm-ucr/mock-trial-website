import Image from "next/image";
import President from "@/public/board/natalia_teglia.webp";
import VicePresident from "@/public/board/keaton_bunker.webp";

const BoardFirstRow = () => {
  return (
    <div className="mt-50 flex h-screen items-start justify-center gap-20">
      <div className="flex w-1/4 flex-col items-center">
        <div className="bg-mocktrial-yellow relative aspect-square w-full overflow-visible rounded-3xl">
          <Image
            src={President}
            alt="Natalia Teglia"
            fill
            className="-translate-y-17 scale-140 rounded-3xl object-cover object-bottom"
          />
        </div>
        <p className="text-mocktrial-darkblue mt-5 text-center text-[2.5rem] font-extrabold">
          Natalia Teglia
        </p>
        <p className="text-mocktrial-darkblue -mt-3 text-center text-2xl font-semibold">
          President
        </p>
      </div>

      <div className="flex w-1/4 flex-col items-center">
        <div className="bg-mocktrial-yellow relative aspect-square w-full overflow-visible rounded-3xl">
          <Image
            src={VicePresident}
            alt="Keaton Bunker"
            fill
            className="origin-bottom -translate-x-5 -translate-y-23 scale-90 overflow-visible rounded-3xl object-cover"
          />
        </div>
        <p className="text-mocktrial-darkblue mt-5 text-center text-[2.5rem] font-extrabold">
          Keaton Bunker
        </p>
        <p className="text-mocktrial-darkblue -mt-3 text-center text-2xl font-semibold">
          Vice President
        </p>
      </div>
    </div>
  );
};

export default BoardFirstRow;
