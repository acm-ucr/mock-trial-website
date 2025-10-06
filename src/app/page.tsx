import Example from "@/components/Example";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <div className="flex h-screen w-screen items-center justify-center">
        <Example text1="adjust" text2="text2" text3="these" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
