import LeftAchCard from "@/components/achievements/LeftAchCard";
import RightAchCard from "@/components/achievements/RightAchCard";
import LeftAchMobileCard from "@/components/achievements/LeftAchMobileCard";
import RightAchMobileCard from "@/components/achievements/RightAchMobileCard";
import AchievementsData from "@/data/AchievementsData";

const AchievementsGrid = () => {
  return (
    <div className="bg-mocktrial-lightblue relative grid grid-cols-1">
      <div className="mt-10 block md:hidden"></div>
      {AchievementsData.map(({ image, text }, index) => (
        <div key={index}>
          {/* Mobile View */}
          <div className="mt-13 block md:hidden">
            {index % 2 === 0 ? (
              <LeftAchMobileCard image={image} text={text} />
            ) : (
              <RightAchMobileCard image={image} text={text} />
            )}
          </div>
          {/* Desktop View */}
          <div className="hidden md:block">
            {index % 2 === 0 ? (
              <LeftAchCard image={image} text={text} />
            ) : (
              <RightAchCard image={image} text={text} />
            )}
          </div>
        </div>
      ))}
      <div className="mb-45 block md:hidden"></div>
    </div>

    // <div className="block md:hidden mb-20"></div>
  );
};

export default AchievementsGrid;
