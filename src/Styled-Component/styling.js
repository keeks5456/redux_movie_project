import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color:${(props) => props.theme === true ? "#000" : "#fff"};
  color: ${(props) => props.theme === true ? "#fff" : "#000" };

`;

