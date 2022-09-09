import REACT, { useState } from "react";
let Counter = () => {
  const [value, newValue] = useState(0);

  return (
    <>
      <h1>COUNTER:{value}</h1>
      <button onClick={() => newValue(value + 1)}>INCREMENT</button>
      <button onClick={() => newValue(value - 1)}>DECREMENT</button>
      <button onClick={() => newValue(0)}>RESET</button>
    </>
  );
};
export default Counter;
