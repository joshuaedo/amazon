import Header from "@/components/Header";
import CheckoutProduct from "@/components/CheckoutProduct";
import Head from "next/head";
import { selectItems } from "@/slices/basketSlice";
import Image from "next/legacy/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { signIn, useSession } from "next-auth/react";

export default function Checkout() {
  const items = useSelector(selectItems);
  const session = useSession();
  console.log(session.status);
  const isAuthenticated = () => {
    if (session.status === "authenticated") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Amazon.com Shopping Cart</title>
      </Head>
      <Header />

      {/* Left */}
      {items.length > 0 ? (
        <main className="lg:flex max-w-screen-2xl mx-auto p-7">
          <div className="flex-grow m-5 shadow-sm">
            <Image
              src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd22/xcm_em_prime_day_2022_374_usen_8355_b8h3zhimek_us_en_mobile_cg_750x375"
              width={350}
              height={175}
              objectFit="contain"
              alt=""
            />
            <div className="flex flex-col p-5 space-y-10 bg-white">
              <h1 className="text-3xl border-b pb-4 font-bold">
                Your Shopping Basket
              </h1>

              {items.map(
                (
                  {
                    id,
                    title,
                    description,
                    category,
                    image,
                    price,
                    hasPrime,
                    rating,
                  },
                  i
                ) => (
                  <CheckoutProduct
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    category={category}
                    image={image}
                    price={price}
                    hasPrime={hasPrime}
                    rating={rating}
                  />
                )
              )}
            </div>
          </div>

          {/* Right */}

          <div>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):
              <span className="font-bold">{/* <p>{total}</p> */}</span>
            </h2>
            {isAuthenticated() ? (
              <button className="button mt-2">Proceed to Checkout</button>
            ) : (
              <button onClick={signIn} className="button mt-2">
                Sign in to Checkout
              </button>
            )}
          </div>
        </main>
      ) : (
        <>
          <main className="max-w-screen-lg m-5 p-3">
            <div className="flex mb-5 p-3 shadow-sm bg-white">
              <div>
                {" "}
                <Image
                  src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                  width={350}
                  height={200}
                  objectFit="contain"
                  alt=""
                />
              </div>

              <div className="ml-6 bg-white flex items-center justify-center">
                <div>
                  <h1 className="text-xs md:text-2xl font-bold">
                    Your Amazon Cart is empty
                  </h1>
                  <p className="text-blue-300 text-sm hidden md:flex">
                    Shop today&apos;s deals
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 bg-white items-center w-[100%] h-20 mb-3" />

            <div className="space-y-3 items-center">
              <p className="text-xs">
                The price and availability of items at Amazon.com are subject to
                change. The Cart is a temporary place to store a list of your
                items and reflects each item&apos;s most recent price.
                <Link href="https://www.amazon.com/gp/help/customer/display.html/ref=ord_cart_lm?nodeId=468468">
                  <span className="link text-blue-300"> Learn more</span>
                </Link>
                <br />
                Do you have a gift card or promotional code? We&apos;ll ask you
                to enter your claim code when it&apos;s time to pay.
              </p>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
