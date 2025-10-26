import LeftAchCard from "@/components/achievements/LeftAchCard";
import RightAchCard from "@/components/achievements/RightAchCard";
import AchievementsData from "@/data/AchievementsData";

const AchievementsGrid = () => {
  return (
    <div className="relative grid grid-cols-1">
      {AchievementsData.map(({ image, text, size }, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <LeftAchCard image={image} text={text} size={size} />
          ) : (
            <RightAchCard image={image} text={text} size={size} />
          )}
        </div>
      ))}
    </div>
  );
};

export default AchievementsGrid;
