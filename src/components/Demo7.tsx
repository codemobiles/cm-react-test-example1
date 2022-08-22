import React from "react";

type Props = {};

export default function Demo7({}: Props) {
  const [result, setResult] = React.useState<string[]>([]);
  return (
    <>
      <button
        onClick={() => {
          setResult([...result, ...["angular", "react", "flutter", "vuejs"]]);
        }}
      >
        Fetch
      </button>
      <button onClick={() => setResult([])}>Clear</button>
      <ul>
        {result.map((item) => (
          <li role="item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
