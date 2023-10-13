import styled from 'styled-components';

export const ButtonContainer = styled.div`
    img{
        width: 200px;
        height: 200px;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const PageButton = styled.button`
    background-color: #483434;
    border: 0;
    width: 250px;
    height: 60px;
    padding: 6px;
    margin-right: 20px;
    margin-top: 10px;
    border-radius: 10px;
    
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: #F0f0f0;
    font-weight: 500;
    letter-spacing: 1px;

    &:hover {
        background-color: #6B4F4F;
        transition: ease 0.5s;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    color: #483434;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    margin-top: 10px;
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