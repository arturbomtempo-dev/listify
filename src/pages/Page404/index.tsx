import { useState } from 'react';
import { Link } from 'react-router-dom';
import completed from '../../assets/Images/Icons/completed-icon.png';
import pending from '../../assets/Images/Icons/pending-icon.png';
import {
    ButtonContainer,
    LogoContainer,
    PageButton,
    Title,
} from '../../assets/styles/Task/TaskApp/TaskApp.style';
import logo from '/logo.png';

export function Page404() {
    const [currentPage, setCurrentPage] = useState<string>('ativos');

    const handleActiveTasks = () => {
        setCurrentPage('ativos');
    };

    const handleCompletedTasks = () => {
        setCurrentPage('concluidos');
    };

    console.log(`Estado atual: ${currentPage}`);

    return (
        <>
            <LogoContainer>
                <img src={logo} alt="Logo da aplicação" />
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
            <Title>Página não encontrada</Title>
        </>
    );
}
