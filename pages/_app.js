import "../styles/globals.css";
import { MenuProvider } from "../context/menu-context";
import { ApolloProvider } from "@apollo/client";
import client from "../clients/apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </ApolloProvider>
  );
}

export default MyApp;
