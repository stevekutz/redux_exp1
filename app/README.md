# Basic Redux experiments

1) Set up app `create-react-app` app
2) Add dependencies
    - yarn add `react-redux redux` 

## Setup flow

1) Set up the `store` (obj that holds state tree, e.g. app data). <Provider/> wraps entire application and `store` is passed into it.
    - Add to index.js
        - `import {createStore} from 'redux';`
        - `import {Provider} from 'react-redux';`
        - `import rootReducer from './reducers/reducer';`

        - `const store = createStore(rootReducer);`
    - wrap `<App/> in <Provider />`

    - #### pass in `store` as prop
    ````
    ReactDOM.render(
        <Provider store = {store}>
            <App />
        </Provider>, 
    document.getElementById('root'));
    ````

2) Build Container(e.g. state-aware `smart component`)
    - create Title container in `src/container` folder
    - import `connect` so we can allow `views` to access `store` data
        - import { connect } from 'react-redux';
    - leave placeholders for `action creators` (e.g. function that return `actions`(e.g. events/command pattern with `type` & `payload`)) This shold be updated AFTER 
        - // import {`some action creator`} from '../actions/actions';
    - defime initial state, handlers, JSX, ...
    ````
    class Title extends React.Component {
        state = {
            newTitleText: ''
        }

        handleChange = ev => {
            this.setState({
                [ev.target.name] : ev.target.value
            });
        }

        updateTitle = ev => {
            ev.preventDefault();
            this.props.updateTitle(this.state.newTitleText);
            this.setState({newTitleText: ''});    // reset input to blank
        }    

        render() {
            return (
                <div>
                <h2> {this.props.title}</h2> 
                <input 
                    type = 'text'
                    name = 'newTitleText'
                    value = {this.state.newTitleText}
                    onChange = {this.handleChange}
                />
                <button onClick = {this.updateTitle}> Update Title</button>
                </div>
            );
        }
    }

    ````
3)    Use  `conect` as `HOC(Higher Order Component)` to map state to the props of `smart component` using `mapStateToProps`. Different parts of state tree are mapped here. MSTP(MapStateToProps).  


    const mapStateToProps = state => {
            return {
                title: state.title
            };
        };


    - #### Notice how `function currying (connect is called twice)` is used with `connect`
    -
        1) the `mapStateToProps` function is passed in
        2) `action creators` obj passed to props
        
            export default connect(
                mapStateToProps,
                {updateTitle}   // could be written {updateTitle: updateTitle}
            )(Title);
        
4) Update App component
    ````
    import React from 'react';
    import './App.css';

    import Title from './components/Title';
    ````
    ````
    function App() {
    return (
        <div className="App">
            <Title />
        </div>
    );
    }

    export default App;
    ````
5) Build `actions`(sends data to `store` as obj with `action` and `payload`)
    - THIS   
- add store & Provider to App
- add folders inside src
    - actions - build actions.js
    - reducers - build reducers.js
    - components - build out Title Component
        - import connect & action creators
        - define `mapStateToProps`
        - define  `export default connect`
        - build class state, handlers, render
     - build out App   

#### run `yarn start` from app  to launch

### Reducers
- UPDATE TITLE
