import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <div className="relative">
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </Provider>
  );
}
