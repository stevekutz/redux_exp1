import React from 'react';
import './App.css';

import Title from './views/Title';
import TitleView from './views/TitleView';
import TitleFC from './components/TitleComponent';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <div className="App">
        <div className = "allSharedState">
        <h5> All will share State</h5>
          <Title />
          <Title />
          <TitleView />
          <TitleComponent />
          <TitleFC />
        </div>

   
    </div>
  );
}

export default App;
