import React, { useState, useEffect } from "react";

function App() {
  const [count] = useState(0);

  useEffect(() => {
    console.log(count);
  }, []);

  return <div>{count}</div>;
}

App();
