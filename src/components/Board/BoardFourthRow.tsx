import Image from "next/image";
import Arin from "@/public/board/arin_nergizyan.webp";
import Praghya from "@/public/board/praghya_ramesh.webp";

const BoardFourthRow = () => {
  return (
    <div className="text-mocktrial-darkblue flex flex-col justify-center gap-20 py-40 text-center md:flex-row">
      <div>
        <div className="relative h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]" />
          <div className="absolute -top-17 left-4">
            <Image
              src={Arin}
              alt="Arin Nergizyan"
              className="h-117 w-full object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-3xl font-bold">Arin Nergizyan</p>
        <p className="text-2xl">Co-Social Media Manager</p>
      </div>

      <div>
        <div className="relative h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]" />
          <div className="absolute -top-40">
            <Image
              src={Praghya}
              alt="Praghya Ramesh"
              className="h-140 w-95 rounded-3xl object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-3xl font-bold">Praghya Ramesh</p>
        <p className="text-2xl">Co-Social Media Manager</p>
      </div>
    </div>
  );
};

export default BoardFourthRow;
