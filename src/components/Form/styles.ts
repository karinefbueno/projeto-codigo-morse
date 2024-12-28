import styled from "styled-components"
import Colors from "../../styles/Colors"

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    gap: 20px;
    align-items: center;
    background-color: ${Colors.grey2};
    padding: 30px;
    width: 40%;
    min-height: 55%;
    border-radius: 50px;

    @media (max-width: 500px)  {
        width: auto;
        max-width: 350px;
        margin-top: -30%;
    }
`

export const Paragraph = styled.p`
    border-radius: 8px;
    background-color: ${Colors.grey1};
    font-size: 40px;
    min-height: 60px;
    width: auto;
    height: auto;
    color: ${Colors.green};
    text-align: center;
    padding: 10px 20px;
`

export const Title = styled.h1`
    text-align: start;
    color: ${Colors.grey3};
    font-size: 36px;
    padding:12px 0px 0px 12px;
`

export const Error = styled.div`
     background-color: ${Colors.grey1};
     color: ${Colors.green};
     font-size: 20px;
`