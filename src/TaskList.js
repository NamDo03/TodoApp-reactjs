import { HiXCircle } from "react-icons/hi";

export const TaskList = (props) => {

    return (
        <div
            className={props.completed ? "task complete" : "task"}
        >
            <div className="leftpart">
                <div>
                    <label
                        onClick={() => props.completeTask(props.id)}
                        className="checkbox-btn">
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <h1 className="task-name">{props.taskName}</h1>
            </div>
            <div className="rightpart">
                <HiXCircle
                    className='delete-icon'
                    onClick={() => props.deleteTask(props.id)}
                >
                </HiXCircle>
            </div>
        </div >
    );
};
