import "../styles/globals.css";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import MDXProvider from "../components/MDXProvider";
import Nav from "../components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider>
        <Nav />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
