import { StaticImageData } from "next/image";
import One from "@/public/home/landing.webp";
import Two from "@/public/home/IMG_3339.webp";
import Three from "@/public/home/IMG_2323.webp";
import Four from "@/public/home/IMG_0002.webp";

interface Photo {
  src: StaticImageData;
  alt: string;
}

export const carouselPhotos: Photo[] = [
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
