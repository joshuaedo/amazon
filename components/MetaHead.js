import Head from "next/head";
export default function MetaHead(props) {
  return (
    <Head>
      <meta
        name="description"
        content="Browse & discover millions of products. Read customer reviews and find best sellers. We ship to over 100 international destinations, right to your doorstep."
      />
      <meta name="title" content="Amazon.com. Spend less. Smile more." />

      <meta property="og:title" content="Amazon.com. Spend less. Smile more." />
      <meta
        property="og:description"
        content="Browse & discover millions of products."
      />
      <meta property="og:url" content="https://amazon.joshuaedo.com" />
      <meta
        property="og:image:url"
        content="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
      />

      <meta
        name="twitter:title"
        content="Amazon.com. Spend less. Smile more."
      />
      <meta
        name="twitter:description"
        content="Browse & discover millions of products."
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:image"
        content="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png"
      />

      {props.children}
    </Head>
  );
}
