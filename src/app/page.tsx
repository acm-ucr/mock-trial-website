import Header from "@/components/Header";
import AboutUs from "@/components/Home/AboutUs";
import Carousel from "@/components/Home/Carousel";
import carouselPhotos from "@/data/CarouselPictures";

const Home = () => {
  return (
    <>
      <Carousel photos={carouselPhotos} />
      <Header>About Us</Header>
      <AboutUs />
    </>
  );
};

export default Home;
