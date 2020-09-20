import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: ${({theme}) => theme.color.mainColor};
    color: ${({theme}) => theme.color.buttonColor};
    font-size: 20px;
    padding: 15px;
    border-radius: 20px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;