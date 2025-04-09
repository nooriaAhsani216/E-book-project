import "@/styles/globals.css";
import Header from "@/components/Header"; // اگر در مسیر components است
import MainHome from "@/components/Home/MainHome";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <MainHome />
      <Component {...pageProps} />
    </>
  );
}
