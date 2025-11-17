import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
import Demo from "@/components/Home/Demo";
import DemoAgain from "@/components/Home/DemoAgain";

const Home = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="About Us" />
      <AboutUs />
      <Demo />
      <DemoAgain />
    </div>
  );
};

export default Home;
