import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <>
      {/* Top Nav */}

      {/* Left-Top Nav */}
      <nav className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* SearchBar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-yellow-300 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2  h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right-Top Nav */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello, Joshua</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center border border-white p-1 rounded">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10 font-bold" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
          </div>
        </div>
      </nav>
      {/* Bottom Nav */}
      <nav className="relative flex bg-amazon_blue-light text-white text-xs md:text-sm font-bold">
        <div className="flex items-center space-x-3 p-2 pl-5">
          <p className="font-extrabold flex items-center">
            <Bars3Icon className="h-6 pr-1" />
            All
          </p>
          <p className="link">Today's Deals</p>
          <p className="link">Customer Service</p>
          <p className="link">Registry</p>
          <p className="link">Gift Cards</p>
          <p className="link">Sell</p>
        </div>
        <div className="hidden md:flex items-center absolute right-6 top-3">
          <p className="link">Shop great deals now</p>
        </div>
      </nav>
    </>
  );
}
