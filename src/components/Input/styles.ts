import styled from "styled-components"
import Colors from "../../styles/Colors"

export const Input= styled.input`
    background-color: transparent;
    border-radius: 12px;
    border: 3px solid ${Colors.green};
    width: 80%;
    height: 50px;
    color:  ${Colors.grey3};
    padding: 16px;
    font-size: 24px;

    @media (max-width: 500px)  {
        width: auto;
        max-width: 330px;
    }

`