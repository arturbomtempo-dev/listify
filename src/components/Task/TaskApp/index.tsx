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

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

type Page = 'ativos' | 'concluidos';

interface TaskAppProps {
    currentPage?: Page;
}

export const TaskApp: React.FC<TaskAppProps> = ({ currentPage = 'ativos' }) => {
    const [tasksList, setTasksList] = useLocalStorage<Task[]>('tasksList', []);
    const [taskInput, setTaskInput] = useState<string>('');
    const [currentPageState, setCurrentPageState] = useState<Page>(currentPage);

    const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (taskInput.trim() !== '') {
            const newTask: Task = { id: uuidv4(), text: taskInput, completed: false };
            setTasksList([...tasksList, newTask]);
            setTaskInput('');
        }
    };

    const handleTaskComplete = (taskId: string) => {
        const updatedTasks = tasksList.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );

        setTasksList(updatedTasks);
    };

    const handleDeleteTask = (taskId: string) => {
        const updatedTasks = tasksList.filter((task) => task.id !== taskId);
        setTasksList(updatedTasks);
    };

    const handleActiveTasks = () => {
        setCurrentPageState('ativos');
    };

    const handleCompletedTasks = () => {
        setCurrentPageState('concluidos');
    };

    const filteredTasks =
        currentPageState === 'ativos'
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
                        <img src={pending} alt="Ícone de tarefas pendentes" />
                    </PageButton>
                </Link>
                <Link to="/tarefas-concluidas">
                    <PageButton onClick={handleCompletedTasks}>
                        Tarefas Concluídas
                        <img src={completed} alt="Ícone de tarefas concluídas" />
                    </PageButton>
                </Link>
            </ButtonContainer>
            <Title>
                {currentPageState === 'ativos' ? 'Tarefas Pendentes' : 'Tarefas Concluídas'}
            </Title>
            {currentPageState === 'ativos' ? (
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
                currentPage={currentPageState}
            />
        </>
    );
};
