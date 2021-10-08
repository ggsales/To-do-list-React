import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tasks from './components/Tasks'
import "./App.css"
import AddTask from "./components/AddTask";


const App = () => {
    const [tarefas, setTarefas] = useState([
      {
          id: '1',
          title: 'Estudar Programação',
          completed : false,
      },
      {
          id : '2',
          title: 'Ler livros',
          completed : true,
      },
    ]);
    const handleTaskClick = (taskId) => {
      const newTask = tarefas.map(task =>{
        if(task.id === taskId) return {... task, completed: !task.completed}

        return task
      })
      setTarefas(newTask)
    };



    const handleTaskAddition = (taskTitle) =>{
      const newTask = [
        ... tarefas, 
        {
          title: taskTitle,
          id : uuidv4,
          completed: false,
      },
    ];

      setTarefas(newTask)
    };

    return( 
      <>
        <div className= "container">
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks tarefas={tarefas}  handleTaskClick={handleTaskClick}/>
        </div>;
      </>
    );
};

export default App;