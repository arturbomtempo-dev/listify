import PropTypes from 'prop-types';
import trash from '../../../assets/Images/Icons/trash-icon.png';
import {
    CheckboxCompleted,
    DeleteButton,
    TaskListItem,
    TasksList,
    TaskText,
    WarningText,
} from '../../../assets/styles/Task/TaskList/TaskList.style';

export function TaskList({ tasks, onCompleteTask, onDeleteTask, currentPage }) {
    return (
        <TasksList>
            {tasks.length === 0 ? (
                <WarningText>
                    {currentPage === 'ativos'
                        ? 'Não há tarefas pendentes.'
                        : 'Não há tarefas concluídas.'}
                </WarningText>
            ) : (
                tasks.map((task) => (
                    <TaskListItem key={task.id}>
                        <CheckboxCompleted
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onCompleteTask(task.id)}
                        />
                        <TaskText>{task.text}</TaskText>
                        <DeleteButton onClick={() => onDeleteTask(task.id)}>
                            <img src={trash} />
                        </DeleteButton>
                    </TaskListItem>
                ))
            )}
        </TasksList>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onCompleteTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired,
};
