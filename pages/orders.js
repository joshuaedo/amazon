import MetaHead from "@/components/MetaHead";
import Order from "@/components/Order";
import { db } from "@/firebase";
import { collectionGroup, query, where, getDocs } from "firebase/firestore";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Orders({ orders }) {
  const session = useSession();
  const router = useRouter();

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
        <div className="p-6 md:p-12 bg-white shadow-sm mb-5">
          {isAuthenticated() ? (
            <div className="space-y-4">
              {orders ? (
                orders.map(
                  ({ amount, amount_shipping, timestamp, images }, i) => (
                    <Order
                      key={i}
                      amount={amount}
                      amountShipping={amount_shipping}
                      timestamp={timestamp}
                      images={images}
                    />
                  )
                )
              ) : (
                <h2 className="text-xs">
                  You have no orders.{" "}
                  <button
                    role="link"
                    onClick={() => {
                      router.push("/");
                    }}
                    className="link text-blue-300"
                  >
                    Go
                  </button>{" "}
                  make one.
                </h2>
              )}
            </div>
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
  const session = await getSession(context);
  console.log(session.user.email);

  if (!session) {
    return {
      props: {},
    };
  }

  const q = query(
    collectionGroup(db, "orders")
    // where("email", "==", session.user.email)
  );

  const querySnapshot = await getDocs(q);

  const orders = []; // Define the orders array outside the forEach loop

  querySnapshot.forEach((doc) => {
    doc.data()?.email === session.user?.email &&
      orders.push(JSON.parse(JSON.stringify(doc.data())));
  });

  return {
    props: {
      orders,
    },
  };
}
