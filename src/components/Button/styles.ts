import styled from "styled-components"
import Colors from "../../styles/Colors"

interface ButtonProp {
    color?: string
    background?: string
}

export const Button = styled.button<ButtonProp>`
    background-color: ${(props) => props.background || Colors.green};
    text-align: center;
    border-radius: 16px;
    font-size: 24px;
    font-weight: 600 ;
    height: 60px;
    width: 220px;
    color: ${(props) => props.color || Colors.grey3};
    border: none;

    @media screen {
        
    }
`