import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
//import JoinUs from "@/components/Home/JoinUs";
import Carousel from "@/components/Home/Carousel";
import { carouselPhotos } from "@/data/Carousel";

const Home = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Carousel photos={carouselPhotos} />
      <Header title="About Us" />
      <AboutUs />
    </div>
  );
};

export default Home;
