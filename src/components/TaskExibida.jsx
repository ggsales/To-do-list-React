import React from "react";
import './taskStyle.css';

const TaskExibida = ({tarefa, handleTaskClick, handleTaskDeletion}) => {
        return(
            <div 
                className="task-container"
                style={tarefa.completed ? {borderLeft: '6px solid rgb(208, 111, 21)'} : {}}
            >
                <div className="task-title" onClick={() => handleTaskClick(tarefa.id)}>
                    {tarefa.title}
                </div>

                <div className="btn-container-tasks">
                    <button onClick={() => handleTaskDeletion(tarefa.id)} className="remove-task-btn">X</button>
                </div>
            </div>
        );


    //return <div className = "task-container">{tarefa.title}</div>;
};

export default TaskExibida;