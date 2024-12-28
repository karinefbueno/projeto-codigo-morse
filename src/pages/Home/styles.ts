import styled from "styled-components"
import Colors from "../../styles/Colors"

export const Container= styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    height: 100vh;
    padding: 4px;

    @media (max-width: 500px)  {
        flex-direction: column;
    }
`

export const Title = styled.h1`
    color: ${Colors.grey2};
    font-size: 46px;
    padding:16px 0px  0px 16px; 
    margin-left: 70px;
    border-left: 10px solid ${Colors.green};
    border-radius: 4px;
    text-align: start;

    @media (max-width: 500px)  {
        font-size: 36px;
        padding:0px 40px 20px 8px;
    }
`

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap:30px;
    justify-content: center;
    width: 40%;
    height: 100%;
    margin-right: -32px;

    @media (max-width: 500px)  {
       margin: 4px;
       width: auto;
       align-items: center;
    }
`

export const Imagem = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 50px;

    @media (max-width: 500px)  {
        width: auto;
        margin-left: 4px;
    }
`