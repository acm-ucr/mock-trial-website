import Image from "next/image";
import tejalProfilePicture from "@/public/board/tejal_prabhu.webp";
import pascaleProfilePicture from "@/public/board/pascale_gibbs.webp";

const BoardSecondRow = () => {
  return (
    <div className="flex flex-col justify-center gap-20 md:flex-row">
      <div className="pt-20 text-center">
        <div className="bg-mocktrial-yellow relative inset-0 mx-auto h-[300px] w-[300px] rounded-3xl">
          <div className="absolute z-10 -mt-28">
            <Image
              src={tejalProfilePicture}
              alt="Tejal Prabhu"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="text-mocktrial-darkblue mt-6 text-2xl font-bold">
          Tejal Prabhu
        </p>
        <p className="text-mocktrial-darkblue text-lg">Co-Coordinator</p>
      </div>

      <div className="pt-20 text-center">
        <div className="bg-mocktrial-yellow relative inset-0 mx-auto h-[300px] w-[300px] rounded-3xl">
          <div className="absolute z-10 -mt-31 mr-2">
            <Image
              src={pascaleProfilePicture}
              alt="Pascale Gibbs"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="text-mocktrial-darkblue mt-6 text-2xl font-bold">
          Pascale Gibbs
        </p>
        <p className="text-mocktrial-darkblue text-lg">Co-Coordinator</p>
      </div>
    </div>
  );
};

export default BoardSecondRow;
