import { StyledHeader, List, Item } from '../../assets/styles/components/Header/Header.style';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <StyledHeader>
            <List>
                <Link to='/'><Item>Tarefas pendentes</Item></Link>
                <Link to='/tarefas-concluidas'><Item>Tarefas concluídas</Item></Link>
            </List>
        </StyledHeader>
    );
}