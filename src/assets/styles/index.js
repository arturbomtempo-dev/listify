import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: linear-gradient(50deg, #6B4F4F, #EED6C4);
        background-position: center;
        background-size: cover;
        background-repeat: repeat-y;

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background: #EED6C4;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: #483434;
            width: 10px;
        }
    }
`;