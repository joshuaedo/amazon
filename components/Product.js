import { useState } from "react";
import Image from "next/legacy/image";
import { StarIcon } from "@heroicons/react/24/solid";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({
  id,
  title,
  description,
  category,
  image,
  price,
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 italic text-gray-400">{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" alt="" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <p>${price}</p>
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_Prime_Logo.svg"
              height="25"
              width="40"
              alt=""
            />
          </>
          <>
            <p className="text-xs text-gray-500">FREE Next Day Delivery</p>
          </>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}
