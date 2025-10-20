import LeftAchCard from "@/components/achievements/LeftAchCard";
import Image from "@/public/achievements/testImage.webp";

const LeftAch = () => {
  return (
    <div>
      <LeftAchCard image={Image} text="Test Achievement" size="text-5xl" />
    </div>
  );
};

export default LeftAch;
