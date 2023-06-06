import Header from "@/components/Header";
import Image from "next/legacy/image";

export default function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd22/xcm_em_prime_day_2022_374_usen_8355_b8h3zhimek_us_en_mobile_cg_750x375"
            width={750}
            height={375}
            objectFit="contain"
            alt=""
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
          </div>
        </div>

        {/* Right */}
        <div></div>
      </main>
    </div>
  );
}
