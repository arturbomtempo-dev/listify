import { Link } from 'react-router-dom';
import { ButtonContainer, LogoContainer, PageButton, Title } from '../../assets/styles/TaskApp/TaskApp.style';
import logo from '/logo.png';
import { useState } from 'react';
import pending from '../../assets/Images/Icons/pending-icon.png';
import completed from '../../assets/Images/Icons/completed-icon.png';

export function Page404() {
    const [currentPage, setCurrentPage] = useState('ativos');

    const handleActiveTasks = () => {
        setCurrentPage('ativos');
    };

    const handleCompletedTasks = () => {
        setCurrentPage('concluidos');
    };
    return (
        <>
            <LogoContainer>
                <img src={logo} alt="Logo" />
            </LogoContainer>
            <ButtonContainer>
                <Link to="/">
                    <PageButton onClick={handleActiveTasks}>Tarefas Pendentes<img src={pending} /></PageButton>
                </Link>
                <Link to="/tarefas-concluidas">
                    <PageButton onClick={handleCompletedTasks}>Tarefas Concluídas<img src={completed} /></PageButton>
                </Link>
            </ButtonContainer>
            <Title>Página não encontrada    </Title>
        </>
    );
}