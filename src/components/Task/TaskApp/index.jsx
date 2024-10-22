import { useLocalStorage } from '@uidotdev/usehooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import completed from '../../../assets/Images/Icons/completed-icon.png';
import pending from '../../../assets/Images/Icons/pending-icon.png';
import {
    AddTasksButton,
    ButtonContainer,
    LogoContainer,
    PageButton,
    TaskForm,
    TaskInput,
    Title,
} from '../../../assets/styles/Task/TaskApp/TaskApp.style';
import { TaskList } from '../TaskList';
import logo from '/logo.png';

export function TaskApp() {
    const [tasksList, setTasksList] = useLocalStorage('tasksList', []);
    const [taskInput, setTaskInput] = useState('');
    const [currentPage, setCurrentPage] = useState('ativos');

    const handleTaskSubmit = (e) => {
        e.preventDefault();

        if (taskInput.trim() !== '') {
            const newTask = { id: uuidv4(), text: taskInput, completed: false };
            setTasksList([...tasksList, newTask]);
            setTaskInput('');
        }
    };

    const handleTaskComplete = (taskId) => {
        const updatedTasks = tasksList.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );

        setTasksList(updatedTasks);
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasksList.filter((task) => task.id !== taskId);
        setTasksList(updatedTasks);
    };

    const handleActiveTasks = () => {
        setCurrentPage('ativos');
    };

    const handleCompletedTasks = () => {
        setCurrentPage('concluidos');
    };

    const filteredTasks =
        currentPage === 'ativos'
            ? tasksList.filter((task) => !task.completed)
            : tasksList.filter((task) => task.completed);

    return (
        <>
            <LogoContainer>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <ButtonContainer>
                <Link to="/">
                    <PageButton onClick={handleActiveTasks}>
                        Tarefas Pendentes
                        <img src={pending} />
                    </PageButton>
                </Link>
                <Link to="/tarefas-concluidas">
                    <PageButton onClick={handleCompletedTasks}>
                        Tarefas Concluídas
                        <img src={completed} />
                    </PageButton>
                </Link>
            </ButtonContainer>
            <Title>{currentPage === 'ativos' ? 'Tarefas Pendentes' : 'Tarefas Concluídas'}</Title>
            {currentPage === 'ativos' ? (
                <TaskForm onSubmit={handleTaskSubmit}>
                    <TaskInput
                        type="text"
                        placeholder="Digite a tarefa"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                    <AddTasksButton type="submit">+</AddTasksButton>
                </TaskForm>
            ) : null}
            <TaskList
                tasks={filteredTasks}
                onCompleteTask={handleTaskComplete}
                onDeleteTask={handleDeleteTask}
                currentPage={currentPage}
            />
        </>
    );
}
