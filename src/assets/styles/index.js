import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #f0f0f0f0;
        background-position: center;
        background-size: cover;
        background-repeat: repeat-y;

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background: #f0f0f0;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: #030140;
            width: 10px;
        }
    }
`;
