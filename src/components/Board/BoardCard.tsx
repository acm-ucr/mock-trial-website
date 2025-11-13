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
          className="mt-10 object-cover object-top"
        />
      </div>
      <p className="mt-6 text-3xl font-bold">{name}</p>
      <p className="mb-10 text-2xl">{title}</p>
    </div>
  );
};

export default BoardCard;
