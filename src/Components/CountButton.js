import React, { useState } from "react";
import styled from "styled-components";

// when using styled components, you have to import styled from react

//when using hooks, it's cleaner to import useState instead writing out React.useState()

const Button = styled.button`
  margin: 15%;
  color: white;
  background: #2b4e72;
  padding: 20px;
  font-size: 20px;
  margin-top: 20px;
`;

// The entire CountButton function will be exported to app.js file

// Within the function, set count and setCount = to useState with a default value of 0. Any value you pass here will be the default start number

// In your Button, setCount is built into the onClick function, which when invoked, grabs the value of count (becuase it's passed in) and adds 1 with each click.

const CountButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount((count) => count + 1)}>
      You clicked {count} times!
    </Button>
  );
};

export default CountButton;
