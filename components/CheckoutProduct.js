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
    <div className="grid grid-cols-5">
      {/* Left */}
      <Image src={image} width={200} height={200} objectFit="contain" alt="" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" key={i} />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>${price}</p>

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
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToCart} className="mt-auto button">
          Add to Cart
        </button>
        <button onClick={removeItemFromCart} className="mt-auto button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
