import Header from "@/components/Header";
import JoinUs from "@/components/Home/JoinUs";

const Home = () => {
  return (
    <>
      <Header title="About Us" />
      <div className="bg-mocktrial-lightblue">
        <JoinUs />
      </div>
    </>
  );
};

export default Home;
