import React, { useState } from "react";

import Tasks from './components/Tasks'
import "./App.css"


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

    return( 
      <>
        <div className= "container">
          <Tasks tarefas={tarefas}/>
        </div>;
      </>
    );
};

export default App;