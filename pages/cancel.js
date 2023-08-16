import MetaHead from "@/components/MetaHead";
import Link from "next/link";

export default function Cancel() {
  return (
    <div className="bg-gray-100 h-screen">
      <MetaHead>
        <title>Error</title>
      </MetaHead>
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-12 bg-white shadow-sm ">
          <div className="flex items-center space-x-2 mb-5">
            <h1 className="text-lg md:text-2xl font-bold text-red-500">
              Error
            </h1>
          </div>
          <p className="text-xs">
            There was a problem with your order. Go back to
            <Link href="/" className="link text-blue-300">
              {" "}
              home.
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
