import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers/reducer';
import Title from './components/Title';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
        <Title />
    </div>
  );
}

export default App;
