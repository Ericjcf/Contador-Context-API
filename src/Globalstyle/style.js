import styled from "styled-components";

export const Container = styled.div`
  width: 610px;
  background-color: #cd48db;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  border-radius: 5px;
  color: whitesmoke;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  div {
    padding: 10px;
    background-color: #f2d6bb;

    display: flex;
    flex-direction: row;
  }

  button:first-child {
    background: #7c41e8;
    color: whitesmoke;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
    font-size: 1.2rem;
    width: 300px;
    transition: 0.2s;
    :hover {
      border: 3px solid whitesmoke;
    }
  }

  button {
    background: #e84160;
    color: whitesmoke;

    height: 50px;
    border: none;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
    font-size: 1.2rem;
    width: 300px;
    transition: 0.2s;
    :hover {
      border: 3px solid whitesmoke;
    }
  }
`;
export default Container;
