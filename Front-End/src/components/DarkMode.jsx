import { createGlobalStyle } from "styled-components";
import miles from '../3547608.jpg';
import peter from '../2455735.jpg';

export const Miles = {
  fontColor: "red",
  border: "#000",
  background: miles,
  body: "black",
};

export const Peter = {
  fontColor: "white",
  border: "#87CEEB",
  background: peter,
  body: "red"
};

export const GlobalStyles = createGlobalStyle`
    body{
        color: ${(props) => props.theme.fontColor};
        background-image: url("${(props) => props.theme.background}");
    }

    button{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }`;