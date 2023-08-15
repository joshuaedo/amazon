import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <div className="relative pb-[9vh] lg:pb-[12vh]">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </SessionProvider>
    </Provider>
  );
}
