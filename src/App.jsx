import { useState } from "react";
import Styled from "styled-components";
import Pad from "./Pad";

const Container = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const GridContainer = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 4rem);
  grid-auto-rows: 4rem;
  `;

const Display = Styled.div`
  display: flex;
  justify-content: end; 
  align-items: end;
  height: 4rem;
  border: 1px solid black;
  padding-block-end: .5rem;
  padding-inline-end: .5rem;
  `;

// const InnerDisplay = Styled.span`
//     margin-inline: .5em;
//     border: 1px solid black;
//   `;

const padOptions = [
  { id: "clear", value: "AC" },
  { id: "divide", value: "/" },
  { id: "multiply", value: "x" },
  { id: "seven", value: "7" },
  { id: "eight", value: "8" },
  { id: "nine", value: "9" },
  { id: "subtract", value: "-" },
  { id: "four", value: "4" },
  { id: "five", value: "5" },
  { id: "six", value: "6" },
  { id: "add", value: "+" },
  { id: "one", value: "1" },
  { id: "two", value: "2" },
  { id: "three", value: "3" },
  { id: "equals", value: "=" },
  { id: "zero", value: "0" },
  { id: "decimal", value: "." },
];

const App = () => {
  const [display, setDisplay] = useState([]);

  const handleClicked = (e) => {
    if (e.target.innerText === "AC") {
      setDisplay([]);
      return;
    }

    setDisplay((prevValue) => {
      const condition =
        e.target.innerText === "/" ||
        e.target.innerText === "x" ||
        e.target.innerText === "-" ||
        e.target.innerText === "+" ||
        e.target.innerText === "="
          ? e.target.innerText
          : Number(e.target.innerText);
      return [...prevValue, condition];
    });
    console.log(display);
  };

  const keyPadElements = padOptions.map((pad) => {
    return (
      <Pad
        key={pad.id}
        id={pad.id}
        value={pad.value}
        onClicked={handleClicked}
      />
    );
  });
  return (
    <Container>
      <Display id="display">{display}</Display>
      <GridContainer>{keyPadElements}</GridContainer>
    </Container>
  );
};

export default App;
