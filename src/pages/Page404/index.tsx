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
    const [setCurrentPage] = useState('ativos');

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
            <Title>Página não encontrada </Title>
        </>
    );
}
