import GlobalStyle from "../styles";
import { plants } from "@/db";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} plants={plants}/>
    </>
  );
}
