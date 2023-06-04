import Image from "next/legacy/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
  return (
    <div className="relative h-screen">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="h-screen">
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg"
            alt=""
            objectFit={true}
            layout="fill"
          />
        </div>
        <div className="h-screen">
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
            alt=""
            objectFit={true}
            layout="fill"
          />
        </div>
        <div className="h-screen">
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
            objectFit={true}
            layout="fill"
          />
        </div>
        <div className="h-screen">
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
            objectFit={true}
            layout="fill"
          />
        </div>
        <div className="h-screen">
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt=""
            objectFit={true}
            layout="fill"
          />
        </div>
        <div className="h-screen">
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
            alt=""
            objectFit={true}
            layout="fill"
          />
        </div>
      </Carousel>
    </div>
  );
}
