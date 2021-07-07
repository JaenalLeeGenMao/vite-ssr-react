import React, { useState } from "react";

export default function Home() {
  console.log("%c ini home", "color: green; font-size: 20px;");
  console.log(import.meta.env.VITE_APP_TITLE);
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Home {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
}
