import Image from "next/legacy/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// test commit

function CarouselImage({ src }) {
  return (
    <div className="h-auto md:h-screen">
      <Image
        loading="lazy"
        src={`https://m.media-amazon.com/images/I/${src}._SX10000_.jpg`}
        alt="CarouselImage"
        objectFit={true}
        height={1200}
        width={3000}
        className="object-contain"
      />
    </div>
  );
}

export default function Banner() {
  return (
    <div className="relative h-auto md:h-screen">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <CarouselImage src="61qa3132IFL" />
        <CarouselImage src="71tIrZqybrL" />
        <CarouselImage src="61TD5JLGhIL" />
        <CarouselImage src="61jovjd+f9L" />
        <CarouselImage src="61DUO0NqyyL" />
        <CarouselImage src="71qid7QFWJL" />
      </Carousel>
    </div>
  );
}
