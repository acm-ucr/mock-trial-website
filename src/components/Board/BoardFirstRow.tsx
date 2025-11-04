import Image from "next/image";
import President from "@/public/board/natalia_teglia.webp";
import VicePresident from "@/public/board/keaton_bunker.webp";

const BoardFirstRow = () => {
  return (
    <div className="text-mocktrial-darkblue flex flex-col justify-center gap-20 py-40 text-center md:flex-row">
      <div>
        <div className="relative h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]" />
          <div className="absolute -top-53">
            <Image
              src={President}
              alt="Natalia Teglia"
              className="h-full w-full scale-130 object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-3xl font-bold">Natalia Teglia</p>
        <p className="text-2xl">President</p>
      </div>

      <div>
        <div className="relative h-100 w-100">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-[#E7C67E] to-[#E1AF42]" />
          <div className="absolute -top-58.5 -left-10">
            <Image
              src={VicePresident}
              alt="Keaton Bunker"
              className="h-full w-full scale-80 object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-3xl font-bold">Keaton Bunker</p>
        <p className="text-2xl">Vice President</p>
      </div>
    </div>
  );
};

export default BoardFirstRow;
