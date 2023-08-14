import Image from "next/legacy/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

export default function CheckoutProduct({
  id,
  title,
  description,
  category,
  image,
  price,
  hasPrime,
  rating,
}) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      description,
      category,
      image,
      price,
      hasPrime,
      rating,
    };

    // sending an action to the redux store
    dispatch(addToBasket(product));
  };

  const removeItemFromCart = () => {
    // remove from the redux store
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 md:place-items-center">
      {/* Left */}
      <>
        <div className="hidden md:flex justify-center items-center">
          <Image
            src={image}
            height={200}
            width={200}
            objectFit="contain"
            alt=""
          />
        </div>
        <div className="flex md:hidden justify-center items-center">
          <Image
            src={image}
            height={150}
            width={150}
            objectFit="contain"
            alt=""
          />
        </div>
      </>
      {/* Middle */}
      <div className="md:col-span-3 mx-5">
        <p className="text-center md:text-start my-3 md:my-1">{title}</p>
        <div className="flex">
          {" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p className="font-semibold">${price}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
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
      </div>

      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto md:justify-self-end">
        <button onClick={addItemToCart} className="mt-2 md:mt-1 button">
          Increase item quantity
        </button>
        <button onClick={removeItemFromCart} className="mt-auto button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
