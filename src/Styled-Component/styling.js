import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  /* width: 100vw; */
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  /* height: 100vh; */
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color:${(props) => props.theme === true ? "#000" : "#fff"};
  color: ${(props) => props.theme === true ? "#fff" : "#000" };
  flex-flow: ${(props) => props.flexFlow ? 'row wrap' : 'column wrap'};
  margin: 0;
`;

export const Card = styled.div`
  width: 13rem;
  height: 100%;
  background-color:${(props) => props.theme === true ? "#000" : "#fff"};
  color: ${(props) => props.theme === true ? "#fff" : "#000" };
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-top: 20px;
`

export const Headers = styled.h1`
  font-family: ${(props) => props.family ? props.family : "'Merriweather', serif;"};
`

export const Button = styled.button`
  border-radius: 5px;
  background-color:${(props) => props.theme === true ? "#000" : "#fff"};
  /* color: ${(props) => props.theme === true ? "#fff" : "#000" }; */
  font-family: ${(props) => props.family ? props.family : "'Merriweather', serif;"};
  margin-bottom: 22px;
`

export const Input = styled.input`

`