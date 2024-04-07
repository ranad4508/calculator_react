import PropTypes from "prop-types";

import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};
StartGame.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default StartGame;
const Container = styled.div`
  max-width: 700px;
  display: flex;
  margin: 10px 50px;
  height: 500px;
  align-items: center;

  .content {
    h1 {
      font-size: 70px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  color: #fff;
  padding: 10px 18px;
  background-color: #000000;
  border-radius: 5px;
  min-width: 200px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
