import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
// import JoinUs from "@/components/Home/JoinUs";

const Home = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="About Us" />
      <AboutUs />
      {/* <JoinUs /> */}
    </div>
  );
};

export default Home;
