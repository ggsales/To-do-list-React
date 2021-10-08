import React from "react";
import TaskExibida from "./TaskExibida";

const Tasks = ({tarefas}) => {
    return (
        <>
            {tarefas.map((tarefa) => (
                 <TaskExibida tarefa={tarefa} /> 
                 ))}
        </>
    );
};

export default Tasks