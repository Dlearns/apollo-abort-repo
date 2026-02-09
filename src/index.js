import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from "@apollo/client";
import {
    ApolloProvider
} from "@apollo/client/react";

import App from "./App";

const link = new HttpLink({
  uri: "https://countries.trevorblades.com/",
});

const client = new ApolloClient({
  link:link,  
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
