import React from "react";
import TaskExibida from "./TaskExibida";

const Tasks = ({tarefas,  handleTaskClick, handleTaskDeletion}) => {
    return (
        <>
            {tarefas.map((tarefa) => (
                 <TaskExibida
                key={tarefa.id}
                  tarefa={tarefa}
                  handleTaskClick={handleTaskClick}
                   handleTaskDeletion={handleTaskDeletion} /> 
                 ))}
        </>
    );
};

export default Tasks