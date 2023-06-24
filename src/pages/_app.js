import "@/styles/globals.css";
import NavMenu from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavMenu />
      <Component {...pageProps} />
   
        <Footer />
   
    </>
  );
}
