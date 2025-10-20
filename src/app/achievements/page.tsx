import Header from "@/components/Header";
import LeftAch from "@/components/achievements/LeftAch";
import RightAch from "@/components/achievements/RightAch";

const Achievements = () => {
  return (
    <>
      <Header title="Achievements" />
      <div>
        <LeftAch />
        <RightAch />
      </div>
    </>
  );
};

export default Achievements;
