import MetaHead from "@/components/MetaHead";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <MetaHead>
        <title>Success!</title>
      </MetaHead>
      <main className="max-w-screen-lg mx-auto ">
        <div className="flex flex-col p-12 bg-white shadow-sm ">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-7" />
            <h1 className="text-lg md:text-2xl font-bold">
              Thank you! Your order has been confirmed
            </h1>
          </div>
          <p className="text-xs">Thanks for shopping with Prime. Come again!</p>
          <button
            onClick={() => {
              router.push("/orders");
            }}
            className="button mt-8"
          >
            Go to your orders
          </button>
        </div>
      </main>
    </div>
  );
}
