import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
import Carousel from "@/components/Home/Carousel";
import { carouselPhotos } from "@/data/CarouselPictures";

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
