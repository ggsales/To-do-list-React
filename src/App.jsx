import React, { useEffect, useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Tasks from './components/Tasks'
import "./App.css"
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/taskDetails";


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
    useEffect( () =>{
      const fetchTasks = async () => {
        const {data} = await axios.get(
          'https://jsonplaceholder.cypress.io/todos?_limit=10'
          );
          setTarefas(data)
      };
     fetchTasks();
    }, []);


    const handleTaskClick = (taskId) => {
      const newTask = tarefas.map(task =>{
        if(task.id === taskId) return {...task, completed: !task.completed}

        return task
      })
      setTarefas(newTask)
    };



    const handleTaskAddition = (taskTitle) =>{
      const newTask = [
        ...tarefas, 
        {
          title: taskTitle,
          id : uuidv4,
          completed: false,
      },
    ];

      setTarefas(newTask)
    };

    const handleTaskDeletion = (taskId) => {
      const newTask = tarefas.filter(task => task.id !== taskId)
      setTarefas(newTask)
    }

    return( 
        <Router>
            <div className= "container">
              <Header />
              <Route 
              path="/" 
              exact 
              render={() => (
                  <>
                    <AddTask handleTaskAddition={handleTaskAddition} />
                    <Tasks
                      tarefas={tarefas}  
                      handleTaskClick={handleTaskClick}
                      handleTaskDeletion={handleTaskDeletion}
                    />
                 </>
                )} 
              />
              <Route path="/:taskTitle" exact component={TaskDetails} />
            </div>
        </Router>
    );
};

export default App;