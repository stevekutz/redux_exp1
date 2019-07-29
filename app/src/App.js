import React from 'react';
import './App.css';

import Title from './views/Title';
import TitleView from './views/TitleView';
import TitleComponent from './components/TitleComponent';
import Counter from './views/Counter';

import Tasks from './views/Tasks';

function App() {
  return (
    <div className="App">
        <div className = "allSharedState">
          <h5> All will share State</h5>
          <Title />
          <Title />
          <TitleView />
          <TitleComponent />
        </div>


        <div className = 'allDistinctState'>
            <h5> Unique state container </h5>
            <div className = 'task_counter_Container' >
            
              <div className = 'tasksMainContainer'>
                <h5> Tasks </h5>
                <Tasks />
              </div>

              <div className = 'counterMainContainer'>
                <h5> Counter </h5>
                <Counter />
              </div>
  
            </div>
            
        </div>


   
    </div>
  );
}

export default App;
