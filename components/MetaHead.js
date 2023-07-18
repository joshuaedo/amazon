import Head from "next/head";
export default function MetaHead(props) {
  return (
    <Head>
      <meta
        name="description"
        content="Browse & discover millions of products. Read customer reviews and find best sellers. We ship to over 100 international destinations, right to your doorstep."
      />
      <meta name="title" content="Prime. Spend less. Smile more." />

      <meta property="og:title" content="Prime. Spend less. Smile more." />
      <meta
        property="og:description"
        content="Browse & discover millions of products."
      />
      <meta property="og:url" content="https://prime.joshuaedo.com" />
      <meta
        property="og:image:url"
        content="https://www.o2.co.uk/documents/1106106/6389453/v2-amazon-prime-casestudy-121222.jpg"
      />

      <meta name="twitter:title" content="Prime. Spend less. Smile more." />
      <meta
        name="twitter:description"
        content="Browse & discover millions of products."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://www.o2.co.uk/documents/1106106/6389453/v2-amazon-prime-casestudy-121222.jpg"
      />

      {props.children}
    </Head>
  );
}
