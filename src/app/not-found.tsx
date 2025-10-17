import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex h-[75vh] flex-col items-center bg-mocktrial-lightblue gap-2 font-bold md:gap-3">
      <div className="relative -bottom-1/18 md:top-1/18 bg-mocktrial-darkblue h-1/8 w-full"></div>
      <div className="flex flex-col h-2/3 justify-center items-center text-center gap-2 md:gap-6">
        <p className="font-mocktrial-montserrat text-mocktrial-darkblue font-bold relative text-5xl md:text-9xl md:mt-6">404</p>
        <p className="font-mocktrial-montserrat text-mocktrial-darkblue text-3xl font-bold md:text-7xl md:mb-6">
          Page not found
        </p>
      
          <Link
            href="/"
            className=" bg-mocktrial-darkblue text-white font-bold font-mocktrial-montserrat rounded-lg md:rounded-2xl md:p-2 text-md md:text-5xl px-10 md:px-20"
          >
            HOME
          </Link>
      </div>
 
      <div className="flex absolute bottom-0 bg-mocktrial-darkblue bg-bottom h-1/8 w-full"></div>
    </div>
  );
};

export default NotFound;