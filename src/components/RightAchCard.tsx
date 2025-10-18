import Image, { StaticImageData } from "next/image";

type Properties = {
  image: StaticImageData;
  text: string;
  size: string;
};

const RightAchCard = ({ image, text, size }: Properties) => {
  return (
    <div className="hidden md:block">
      <div className="grid h-[50vh] grid-cols-1 md:grid-cols-2">
        <div className="bg-mocktrial-blue flex items-center justify-center text-white">
          <p
            className={`${size} px-6 text-center leading-tight font-semibold tracking-wide`}
          >
            {text}
          </p>
        </div>

        <div className="relative">
          <Image
            src={image}
            alt="Achievement Image"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default RightAchCard;
