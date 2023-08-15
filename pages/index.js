import MetaHead from "../components/MetaHead";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "@/components/Footer";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 pb-[9vh] lg:pb-[12vh]">
      <MetaHead>
        <title>Prime. Spend less. Smile more.</title>
      </MetaHead>
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
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
