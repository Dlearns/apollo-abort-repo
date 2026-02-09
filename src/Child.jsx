import React from "react";
// import { useLazyQuery } from "@apollo/client/react";
// import { GET_COUNTRIES } from "./App";

export default function Child({loadParent}) {
  // const [loadChild] = useLazyQuery(GET_COUNTRIES);

  React.useEffect(() => {
    console.log("🔵 Child effect start");

    /* const p = loadChild();

    p.then(
      () => console.log("✅ Child resolved"),
      e => console.error("❌ Child rejected:", e.name)
    ); */

    loadParent();

    
    return () => console.log("🧹 Child cleanup");
  }, [loadParent]);

  return <div>Child mounted</div>;
}
