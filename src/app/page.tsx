import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
import Carousel from "@/components/Home/Carousel";
import carouselPhotos from "@/data/CarouselPictures";

const Home = () => {
  return (
    <>
      <Carousel photos={carouselPhotos} />
      <Header title="About Us" />
      <AboutUs />
    </>
  );
};

export default Home;
