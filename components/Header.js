import Image from "next/legacy/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "@/slices/basketSlice";

export default function Header() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <>
      {/* Left-Top Nav */}
      <nav className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="w-16 flex align-bottom mx-3">
          <Image
            src="https://joshuaedo.sirv.com/prime/prime-logo.png"
            width={1000}
            height={500}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
            onClick={() => router.push("/")}
          />
        </div>

        {/* SearchBar */}
        <div className="cursor-not-allowed hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-300 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2  h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right-Top Nav */}
        <div className="text-white flex items-center text-xs space-x-6 mr-6 ml-2 md:ml-6 whitespace-nowrap">
          <div className="link" onClick={session ? signOut : signIn}>
            <p>{`Hello ${session ? ` ${session.user?.name}` : "there"},`}</p>
            <p className="font-bold md:text-sm">{`Sign ${
              session ? "Out" : "In"
            }?`}</p>
          </div>
          <div className="link" onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center border border-white p-1 rounded"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10 font-bold" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
          </div>
        </div>
      </nav>

      {/* Bottom Nav */}
      <nav className=" cursor-not-allowed relative flex bg-amazon_blue-light text-white text-xs md:text-sm font-bold">
        <div className="flex items-center space-x-3 p-2 pl-5">
          <p className="font-extrabold flex items-center">
            <Bars3Icon className="h-6 pr-1" />
            All
          </p>
          <p className="">Today&apos;s Deals</p>
          <p className="hidden md:flex">Customer Service</p>
          <p className="">Registry</p>
          <p className="">Gift Cards</p>
          <p className="">Sell</p>
        </div>
        <div className="hidden md:flex items-center absolute right-6 top-3">
          <p className="">Shop great deals now</p>
        </div>
      </nav>
    </>
  );
}
