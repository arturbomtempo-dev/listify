import trash from '../../../assets/Images/Icons/trash-icon.png';
import {
    CheckboxCompleted,
    DeleteButton,
    TaskListItem,
    TasksList,
    TaskText,
    WarningText,
} from '../../../assets/styles/Task/TaskList/TaskList.style';

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
    currentPage: 'ativos' | 'concluidos';
}

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onCompleteTask,
    onDeleteTask,
    currentPage,
}) => {
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
                            <img src={trash} alt="Delete task" />
                        </DeleteButton>
                    </TaskListItem>
                ))
            )}
        </TasksList>
    );
};