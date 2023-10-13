import { useEffect, useState } from 'react';
import { AddTasksButton, ButtonContainer, PageButton, TaskForm, TaskInput, Title } from '../../assets/styles/TaskApp/TaskApp.style';
import { Link } from 'react-router-dom';
import { TaskList } from '../TaskList';
import { v4 as uuidv4 } from 'uuid';
import add from '../../assets/icons/icon-add.png';

export function TaskApp() {
    const [tasksList, setTasksList] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [currentPage, setCurrentPage] = useState('ativos');

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasksList');
    
        if (savedTasks) {
            setTasksList(JSON.parse(savedTasks));
        }
    }, []);    

    useEffect(() => {
        localStorage.setItem('tasksList', JSON.stringify(tasksList));
    }, [tasksList]);

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

    const filteredTasks = currentPage === 'ativos' ? tasksList.filter(task => !task.completed) : tasksList.filter(task => task.completed);

    return (
        <>
            <ButtonContainer>
                <Link to="/">
                    <PageButton onClick={handleActiveTasks}>Tarefas Pendentes</PageButton>
                </Link>
                <Link to="/tarefas-concluidas">
                    <PageButton onClick={handleCompletedTasks}>Tarefas Concluídas</PageButton>
                </Link>
            </ButtonContainer>
            <Title>
                {currentPage === 'ativos' ? 'Tarefas Pendentes' : 'Tarefas Concluídas'}
            </Title>
            {
                currentPage === 'ativos' ? (
                    <TaskForm onSubmit={handleTaskSubmit}>
                        <TaskInput
                            type="text"
                            placeholder="Digite a tarefa"
                            value={taskInput}
                            onChange={(e) => setTaskInput(e.target.value)}
                        />
                        <AddTasksButton type="submit"><img src={add} alt="icon-add" className='icon-add'/></AddTasksButton>
                    </TaskForm>
                ) : null
            }
            <TaskList
                tasks={filteredTasks}
                onCompleteTask={handleTaskComplete}
                onDeleteTask={handleDeleteTask}
                currentPage={currentPage}
            />
        </>
    );
}