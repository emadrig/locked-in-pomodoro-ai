import { type Task } from "../types";

type TaskListProps = {
    tasks: Task[];
};

function TaskList({ tasks }: TaskListProps) {
    return (
        <ul className="task-list">
            {tasks.map((task) => {
                return (
                    <li key={task.id} className="task-item">
                        <p className="">{task.title}</p>
                        <p className="">
                            {task.currentPomodoro}/{task.totalPomodoros}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
}

export default TaskList;
