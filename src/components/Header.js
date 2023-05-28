import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Top Nav */}
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
        <div>
          <input type="text " />
        </div>
      </nav>
      {/* Bottom Nav */}
      <nav></nav>
    </>
  );
}
