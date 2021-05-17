import "../styles/custom.css";
import "tailwindcss/tailwind.css";
import "../styles/styles.css";

import { AppWrapper } from "../context/state";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
