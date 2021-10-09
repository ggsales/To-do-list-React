import React from "react";
import './taskStyle.css';
import {CgClose, CgInfo} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'

const TaskExibida = ({tarefa, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory();
    const handleTaskDetailsClick = () => {
        history.push(`/${tarefa.title}`);
    }
        return(
            <div 
                className="task-container"
                style={tarefa.completed ? {borderLeft: '6px solid rgb(208, 111, 21)'} : {}}
            >
                <div className="task-title" onClick={() => handleTaskClick(tarefa.id)}>
                    {tarefa.title}
                </div>

                <div className="btn-container-tasks">
                    <button 
                            className="see-task-details-btn" onClick={handleTaskDetailsClick}
                        >
                            <CgInfo/>        
                    </button>

                    <button 
                        onClick={() => handleTaskDeletion(tarefa.id)}
                        className="remove-task-btn"
                    >
                        <CgClose />        
                    </button>
                    
                </div>
            </div>
        );


    //return <div className = "task-container">{tarefa.title}</div>;
};

export default TaskExibida;