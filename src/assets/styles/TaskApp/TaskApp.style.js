import styled from 'styled-components';

export const ButtonContainer = styled.div`
`;

export const PageButton = styled.button`
    background-color: #AD7BE9;
    border: 0;
    width: 250px;
    height: 60px;
    padding: 6px;
    margin-right: 20px;
    margin-top: 20px;
    border-radius: 10px;
    
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: #222;
    font-weight: 500;
    letter-spacing: 1px;

    &:hover {
        background-color: transparent;
        border: solid 3px #AD7BE9;
        transition: ease-in-out 0.5s;
        cursor: pointer;
        color: #E5CFF7;
    }
`;

export const Title = styled.h1`
    color: #E5CFF7;
    font-family: 'Poppins', sans-serif;
    margin-top: 20px;
`;

export const TaskForm = styled.form`
`;

export const TaskInput = styled.input`
`;

export const AddTasksButton = styled.button`
`;