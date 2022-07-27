import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

  button {
    background: var(--pink-primary);
    color: var(--grey-0);
    height: 50px;
    border: none;
    border-radius: 5px;
    font-family: "Roboto Mono", monospace;
    font-size: 16px;
    width: 100%;
    transition: 0.2s;
    :hover {
      border: 3px solid var(--grey-0);
    }
  }
`;
export default Container;
