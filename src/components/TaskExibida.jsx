import React from "react";
import './taskStyle.css';

const TaskExibida = ({tarefa}) => {
    return <div className = "task-container">{tarefa.title}</div>
};

export default TaskExibida;