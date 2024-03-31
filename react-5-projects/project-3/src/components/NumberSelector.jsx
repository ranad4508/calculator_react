import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error"> {error} </p>{" "}
      <div className="flex">
        {" "}
        {arrNumber.map((value, i) => (
          <Box
            isselected={String(value === selectedNumber)} // Convert to string
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}{" "}
          </Box>
        ))}{" "}
      </div>{" "}
      <p> Select Number </p>{" "}
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 20px;
    font-weight: 600;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 55px;
  width: 55px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) =>
    props.isselected === "true" ? "black" : "white"}; // Check for string value
  color: ${(props) =>
    props.isselected === "false" ? "black" : "white"}; // Check for string value
`;
