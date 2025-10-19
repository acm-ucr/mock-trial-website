import LeftAchievements from "@/components/achievements/leftAchievements";
import TestImage from "@/public/test.webp";

const Achievements = () => {
  return (
    <div className="">
      <LeftAchievements image={TestImage} text="Test Example" size={50} />

      <div>Achievements</div>
    </div>
  );
};

export default Achievements;
