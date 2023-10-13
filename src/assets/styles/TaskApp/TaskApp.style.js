import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const LogoContainer = styled.div`
    img{
        width: 200px;
        margin-top: -50px;
        margin-bottom: -30px;
    }
`

export const PageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background-color: #483434;
    border: 0;
    width: 300px;
    height: 60px;
    padding: 6px;
    margin-right: 20px;
    margin-top: -20px;
    border-radius: 10px;
    
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: #F0f0f0;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: underline #483434; 

    &:hover {
        background-color: #6B4F4F;
        transition: ease 0.5s;
        cursor: pointer;
        text-decoration: underline #6B4F4F; 
    }

    img{
        width: 30px;
        height: 30px;
        margin-left: 10px;
    }
`;

export const Title = styled.h1`
    color: #483434;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    margin-top: 20px;
`;

export const TaskForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TaskInput = styled.input`
    width: 300px;
    height: 55px;
    margin-right: 10px;
    border-radius: 10px;

    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    border: solid 3px #483434;
    background-color: #f0f0f0f0;
    color: #483434;
    font-weight: 500;
`;

export const AddTasksButton = styled.button`
    border: 0;
    border-radius: 50px;
    background: transparent;

    img{
        width: 50px;
        box-shadow: none;
        cursor: pointer;
    }
`;