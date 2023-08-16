import Image from "next/legacy/image";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Order({ amount, amountShipping, timestamp, images }) {
  const dateTime = new Timestamp(
    timestamp.seconds,
    timestamp.nanoseconds
  ).toDate();

  const [formattedDate, setFormattedDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setFormattedDate(dateTime.toLocaleDateString());

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dateTime]);

  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-gray-600 justify-evenly text-xs">
        <div className="">
          <p className="font-bold">Order Placed</p>
          <p className="">
            {isMobile ? formattedDate : dateTime.toLocaleString()}
          </p>
        </div>
        <div className="">
          <p className="font-bold">Subtotal</p>
          <p className="">{`$${amount}`}</p>
        </div>
        <div className="">
          <p className="font-bold">Delivery</p>
          <p className="">{`$${amountShipping}`}</p>
        </div>
      </div>

      <div className="p-5 sm:p-10 flex justify-center items-center">
        {images.map((src) => (
          <div
            className="flex justify-center items-center overflow-x-auto"
            key={src}
          >
            <div className="hidden md:flex justify-center items-center overflow-x-auto">
              <Image
                src={src}
                height={150}
                width={150}
                objectFit="contain"
                alt=""
              />
            </div>
            <div className="flex md:hidden justify-center items-center">
              <Image
                src={src}
                height={100}
                width={100}
                objectFit="contain"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
