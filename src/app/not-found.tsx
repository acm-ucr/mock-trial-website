import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-mocktrial-lightblue relative flex h-[75vh] flex-col items-center gap-2 font-bold md:gap-3">
      <div className="bg-mocktrial-darkblue relative -bottom-1/18 h-1/8 w-full md:top-1/18"></div>
      <div className="flex h-2/3 flex-col items-center justify-center gap-2 text-center md:gap-6">
        <p className="font-mocktrial-montserrat text-mocktrial-darkblue relative text-5xl font-bold md:mt-6 md:text-9xl">
          404
        </p>
        <p className="font-mocktrial-montserrat text-mocktrial-darkblue text-3xl font-bold md:mb-6 md:text-7xl">
          Page not found
        </p>

        <Link
          href="/"
          className="bg-mocktrial-darkblue font-mocktrial-montserrat text-md rounded-lg px-10 font-bold text-white md:rounded-2xl md:px-20 md:py-2 md:text-5xl"
        >
          HOME
        </Link>
      </div>

      <div className="bg-mocktrial-darkblue absolute bottom-0 flex h-1/8 w-full"></div>
    </div>
  );
};

export default NotFound;
