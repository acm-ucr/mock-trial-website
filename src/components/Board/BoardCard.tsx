import Image, { StaticImageData } from "next/image";

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  title: string;
}

const BoardCard: React.FC<BoardCardProps> = ({ image, name, title }) => {
  return (
    <div className="text-mocktrial-darkblue text-center">
      <div className="relative mx-auto aspect-[3/4] w-11/12 overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt="Picture of person"
          className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 object-cover object-top"
        />
      </div>
      <p className="mt-2 md:mt-4 lg:mt-6 text-xl sm:text-2xl lg:text-3xl font-bold">{name}</p>
      <p className="mb-4 md:mb-7 lg:mb-10 text-lg sm:text-xl lg:text-2xl">{title}</p>
    </div>
  );
};

export default BoardCard;
