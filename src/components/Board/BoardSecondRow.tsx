import Image from "next/image";
import tejalProfilePicture from "@/public/board/tejal_prabhu.webp";
import pascaleProfilePicture from "@/public/board/pascale_gibbs.webp";

const BoardSecondRow = () => {
  return (
    <div className="text-mocktrial-darkblue flex flex-col justify-center gap-20 py-40 text-center md:flex-row">
      <div>
        <div className="relative h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]"></div>
          <div className="absolute -top-40">
            <Image
              src={tejalProfilePicture}
              alt="Tejal Prabhu"
              className="h-140 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-3xl font-bold">Tejal Prabhu</p>
        <p className="text-2xl">Co-Coordinator</p>
      </div>

      <div>
        <div className="relative h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]"></div>
          <div className="absolute -top-40">
            <Image
              src={pascaleProfilePicture}
              alt="Pascale Gibbs"
              className="h-140 w-95 rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-3xl font-bold">Pascale Gibbs</p>
        <p className="text-2xl">Co-Coordinator</p>
      </div>
    </div>
  );
};

export default BoardSecondRow;
