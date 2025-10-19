import RightAchCard from "@/components/achievements/RightAchCard";
import Image from "@/public/achievements/testImage.webp";

const RightAch = () => {
  return (
    <div>
      <RightAchCard image={Image} text="Test Achievement" size="text-5xl" />
    </div>
  );
};

export default RightAch;
