import MetaHead from "@/components/MetaHead";
import { db } from "@/firebase";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import { getSession, signIn, useSession } from "next-auth/react";
// import Image from "next/legacy/image";
// import Link from "next/link";

export default function Orders({ orders }) {
  const session = useSession();

  console.log(orders);

  const isAuthenticated = () => {
    if (session.status === "authenticated") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="bg-gray-100 h-screen">
      <MetaHead>
        <title>Your Orders</title>
      </MetaHead>
      <main className="max-w-screen-lg mx-auto flex flex-col">
        <div className="p-12 bg-white shadow-sm mb-5">
          <h1 className="text-lg md:text-2xl font-bold border-b-2 pb-1 border-yellow-400">
            Your Orders
          </h1>
        </div>
        <div className="p-12 bg-white shadow-sm mb-5">
          {isAuthenticated() ? (
            <div className="space-y-4 mt-5"></div>
          ) : (
            <h2 className="text-xs">
              Please{" "}
              <button
                role="link"
                onClick={signIn}
                className="link text-blue-300"
              >
                sign in
              </button>{" "}
              to see your orders
            </h2>
          )}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // get the user credentials
  const session = getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const q = query(collectionGroup(db, "orders"));

  const querySnapshot = await getDocs(q);

  const orders = []; // Define the orders array outside the forEach loop

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    orders.push(JSON.parse(JSON.stringify(doc.data())));
  });

  return {
    props: {
      orders,
    },
  };
}
