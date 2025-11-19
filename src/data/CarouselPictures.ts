import { StaticImageData } from "next/image";
import One from "@/public/home/Carousel1.webp";
import Two from "@/public/home/Carousel2.webp";
import Three from "@/public/home/Carousel3.webp";
import Four from "@/public/home/Carousel4.webp";

export interface Photo {
  src: StaticImageData;
  alt: string;
}

const carouselPhotos: Photo[] = [
  {
    src: One,
    alt: "photo 1",
  },
  {
    src: Two,
    alt: "photo 2",
  },
  {
    src: Three,
    alt: "photo 3",
  },
  {
    src: Four,
    alt: "photo 4",
  },
];

export default carouselPhotos;
