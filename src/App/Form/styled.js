import styled from "styled-components";

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    color: ${({theme}) => theme.color.labelColor};
    font-size: 18px;
    font-weight: bold;
`;

export const Field = styled.input`
    border: 2px solid ${({ theme }) => theme.color.border};
    border-radius: 5px;
    width: 100%;
    max-width: 350px;
    padding: 10px;
`;

export const Button = styled.button`
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    color: ${({ theme }) => theme.color.buttonColor};
    background-color: ${({ theme }) => theme.color.mainColor};
    border-radius: 15px;
    border: none;
    padding: 10px;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Header = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.mainColor};
    border-radius: 15px;
    border: none;
    padding: 5px;
`;

export const Info = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.color.infoColor};
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.color.linkColor};
    font-weight: bold;
    font-style: italic;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Loading = styled.p`
    color: ${({ theme }) => theme.color.mainColor};
`;

export const Failure = styled.p`
    color: ${({ theme }) => theme.color.errorColor};
`;