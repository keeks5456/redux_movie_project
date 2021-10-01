import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  justify-content: start;
  align-items: center;
  font-family: sans-serif;
  background-color: ${(props) => (props.theme === true ? "#000" : "#fff")};
  color: ${(props) => (props.theme === true ? "#fff" : "#000")};
  flex-flow: ${(props) => (props.flexFlow ? "row wrap" : "column wrap")};
  margin: 0;
`;

export const Card = styled.div`
  width: 13rem;
  height: 100%;
  background-color: ${(props) => (props.theme === true ? "#000" : "#fff")};
  color: ${(props) => (props.theme === true ? "#fff" : "#000")};
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-top: 20px;
  margin-left: 48px;
  padding: 15px;

  &:hover{
    box-shadow: 0 0 10px ;
    background-color: ${(props) => (props.theme === true ? "#000" : "#fff")};
    color: ${(props) => (props.theme === true ? "#fff" : "#000")};
  }
`;

export const Headers = styled.h1`
  font-family: ${(props) => props.family ? props.family : "'Merriweather', serif;"};
  letter-spacing: ${(props) => props.letters ? props.letters : '0'};
`;

export const Button = styled.button`
  border-radius: 5px;
  background-color: ${(props) => (props.theme === true ? "#000" : "#fff")};
  color: ${(props) => (props.theme === true ? "#fff" : "#000")};
  font-family: ${(props) => props.family ? props.family : "'Merriweather', serif;"};
  margin: ${(props) => props.margin ? props.margin : '0'};

`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.theme === true ? "#000" : "#fff")};
  color: ${(props) => (props.theme === true ? "#fff" : "#000")};
`;

export const Image = styled.img`
  border-radius:10px;
`