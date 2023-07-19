import { useRouter } from "next/router";
import "@/styles/globals.css";
import NavMenu from "@/components/navbar";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showNavAndFooter = !['/login', '/register'].includes(router.asPath);

  return (
    <> <SessionProvider>
      {showNavAndFooter && <NavMenu />}
     
        <Component {...pageProps} />
      </SessionProvider>
      {showNavAndFooter && <Footer />}
    </>
  );
}
