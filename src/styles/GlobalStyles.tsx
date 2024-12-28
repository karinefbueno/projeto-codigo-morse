import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Cutive", serif;
  }

  body {
    font-family: 'Special Elite', serif;
    background-color: ${Colors.grey};
  } 

  .cutive-regular {
    font-family: 'Cutive', serif;
    font-weight: 400;
    font-style: normal;
  }  
`;
