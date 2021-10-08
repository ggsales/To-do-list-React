import React from "react";
import TaskExibida from "./TaskExibida";

const Tasks = ({tarefas,  handleTaskClick}) => {
    return (
        <>
            {tarefas.map((tarefa) => (
                 <TaskExibida tarefa={tarefa} handleTaskClick={handleTaskClick} /> 
                 ))}
        </>
    );
};

export default Tasks