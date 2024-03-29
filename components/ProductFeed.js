// import Product from "./Product";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
const Product = dynamic(() => import("./Product"), { ssr: false });

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-96 mx-auto px-16 place-content-center">
      {products &&
        products
          .slice(0, 4)
          .map(({ id, title, description, category, image, price }) => (
            <Product
              key={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
            />
          ))}

      {/* Ad */}
      <div className="hidden md:flex col-span-full m-auto">
        <Image
          src="https://links.papareact.com/dyz"
          width="1315"
          height="215"
          alt=""
          objectFit="contain"
        />
      </div>

      <div className="md:col-span-2">
        {products &&
          products
            .slice(4, 5)
            .map(({ id, title, description, category, image, price }) => (
              <Product
                key={id}
                title={title}
                description={description}
                category={category}
                image={image}
                price={price}
              />
            ))}
      </div>

      {products &&
        products
          .slice(5, 11)
          .map(({ id, title, description, category, image, price }) => (
            <Product
              key={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
            />
          ))}

      <div className="md:col-span-2">
        {products &&
          products
            .slice(11, 12)
            .map(({ id, title, description, category, image, price }) => (
              <Product
                key={id}
                title={title}
                description={description}
                category={category}
                image={image}
                price={price}
              />
            ))}
      </div>

      <div className="md:col-span-2">
        {products &&
          products
            .slice(12, 13)
            .map(({ id, title, description, category, image, price }) => (
              <Product
                key={id}
                title={title}
                description={description}
                category={category}
                image={image}
                price={price}
              />
            ))}
      </div>

      <div className="md:col-span-2">
        {products &&
          products
            .slice(13, 14)
            .map(({ id, title, description, category, image, price }) => (
              <Product
                key={id}
                title={title}
                description={description}
                category={category}
                image={image}
                price={price}
              />
            ))}
      </div>

      {products &&
        products
          .slice(14, products.length)
          .map(({ id, title, description, category, image, price }) => (
            <Product
              key={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
            />
          ))}
    </div>
  );
}
