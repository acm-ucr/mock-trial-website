import Image from "next/image";
import tejalProfilePicture from "@/public/board/tejal_prabhu.webp";
import pascaleProfilePicture from "@/public/board/pascale_gibbs.webp";

const BoardSecondRow = () => {
  return (
    <div className="flex flex-col justify-center gap-20 py-40 md:flex-row">
      <div className="text-center">
        <div className="relative mx-auto h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]"></div>
          <div className="absolute -top-40 right-0 left-0 z-10">
            <Image
              src={tejalProfilePicture}
              alt="Tejal Prabhu"
              className="h-140 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="text-mocktrial-darkblue mt-6 text-3xl font-bold">
          Tejal Prabhu
        </p>
        <p className="text-mocktrial-darkblue text-2xl">Co-Coordinator</p>
      </div>

      <div className="text-center">
        <div className="relative mx-auto h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]"></div>
          <div className="absolute -top-40 right-0 left-2 z-10">
            <Image
              src={pascaleProfilePicture}
              alt="Pascale Gibbs"
              className="h-140 w-95 rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="text-mocktrial-darkblue mt-6 text-3xl font-bold">
          Pascale Gibbs
        </p>
        <p className="text-mocktrial-darkblue text-2xl">Co-Coordinator</p>
      </div>
    </div>
  );
};

export default BoardSecondRow;
