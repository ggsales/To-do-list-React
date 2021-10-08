import React from "react";
import './taskStyle.css';

const TaskExibida = ({tarefa, handleTaskClick}) => {
        return(
            <div 
                className="task-container"
                style={tarefa.completed ? {borderLeft: '6px solid rgb(208, 111, 21)'} : {}}
            >
                <div className="task-title" onClick={() => handleTaskClick(tarefa.id)}>
                    {tarefa.title}
                </div>
            </div>
        );


    //return <div className = "task-container">{tarefa.title}</div>;
};

export default TaskExibida;