import Header from "@/components/Header";
import LeftAch from "@/components/achievements/LeftAch";
import RightAch from "@/components/achievements/RightAch";

const Achievements = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Achievements" />
      <LeftAch />
      <RightAch />
    </div>
  );
};

export default Achievements;
