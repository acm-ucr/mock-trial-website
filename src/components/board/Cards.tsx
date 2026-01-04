import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  title: string;
  scale: number;
}

const BoardCard: React.FC<BoardCardProps> = ({ image, name, title, scale }) => {
  return (
    <div className="text-mocktrial-darkblue text-center">
      <div className="relative h-80 w-80 sm:h-85 sm:w-85 md:h-90 md:w-90 lg:h-100 lg:w-100">
        <div className="from-mocktrial-lightyellow to-mocktrial-yellow absolute inset-0 rounded-4xl bg-linear-to-t" />
        <div className="absolute -top-44 mx-auto overflow-hidden sm:-top-46 md:-top-48 lg:-top-50">
          <Image
            src={image}
            alt="Picture of person"
            className="mt-4 h-120 origin-bottom rounded-3xl object-cover object-top sm:mt-6 sm:h-125 md:mt-8 md:h-130 md:rounded-2xl lg:mt-10 lg:h-140"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </div>
      <p className="mt-2 text-xl font-bold sm:text-2xl md:mt-4 lg:mt-6 lg:text-3xl">
        {name}
      </p>
      <p className="mb-4 text-lg sm:text-xl md:mb-7 lg:mb-10 lg:text-2xl">
        {title}
      </p>
    </div>
  );
};

export default BoardCard;
