import RightAchCard from "@/components/RightAchCard";
import Image from "@/public/test-image.jpg";

const RightAch = () => {
  return (
    <div>
      <RightAchCard image={Image} text="Test Achievement" size="text-5xl" />
    </div>
  );
};

export default RightAch;
