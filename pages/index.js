import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
// import dynamic from "next/dynamic";
// const Header = dynamic(() => import("../components/Header"), { ssr: false });
// const Banner = dynamic(() => import("../components/Banner"), { ssr: false });
// const ProductFeed = dynamic(() => import("../components/ProductFeed"), {
//   ssr: false,
// });

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>

      {/* Footer */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
