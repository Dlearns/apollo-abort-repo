import React from "react";
import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import Child from "./Child";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

export default function App() {
  const [loadParent] = useLazyQuery(GET_COUNTRIES);

  const handleLoadParent = React.useCallback(() => {
    loadParent().then(
      () => console.log("✅ Parent resolved"),
      e => console.error("❌ Parent error", e)
    );
  }, [loadParent]);

  React.useEffect(() => {
    /*loadParent().then(
      () => console.log("✅ Parent resolved"),
      e => console.error("❌ Parent error", e)
    );*/
  }, [loadParent]);

  return <Child loadParent={handleLoadParent} />;
}
