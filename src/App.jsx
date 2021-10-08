import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router } from "react-router-dom";


import Tasks from './components/Tasks'
import "./App.css"
import AddTask from "./components/AddTask";
import Header from "./components/Header";


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

    const handleTaskDeletion = (taskId) => {
      const newTask = tarefas.filter(task => task.id != taskId)
      setTarefas(newTask)
    }

    return( 
      <Router>
        <div className= "container">
          <Header />
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks
            tarefas={tarefas}  
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
           />
        </div>;
      </Router>
    );
};

export default App;