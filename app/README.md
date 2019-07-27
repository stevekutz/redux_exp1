# Basic Redux experiments

1) Set up app `create-react-app` app
2) Add dependencies
    - yarn add `react-redux redux` 

## Setup flow

1) Set up the `store` (obj that holds state tree, e.g. app data). <Provider/> wraps entire application and `store` is passed into it.
    - Add to index.js
        ````
        `import {createStore} from 'redux';`
        `import {Provider} from 'react-redux';`
        `import rootReducer from './reducers/reducer';`
        `const store = createStore(rootReducer);`
        ````
        - `Use this method to allow debugging of store`
        ````
        const store = createStore(
        rootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()  
        );
        ````

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
3) Use  `conect` as `HOC(Higher Order Component)` to map state to the props of `smart component` using `mapStateToProps`. Different parts of state tree are mapped here. MSTP(MapStateToProps).  

    ````
    const mapStateToProps = state => {
            return {
                title: state.title
            };
    };
    ````

    - #### Notice how `function currying (connect is called twice)` is used with `connect`
    -
        1) the `mapStateToProps` function is passed in
        2) `action creators` obj passed to props
        
            export default connect(
                mapStateToProps,
                {updateTitle}   // could be written {updateTitle: updateTitle}
            )(Title);
        
4) Update App component to include `Title` `smart component`
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
    - Define `action type` to avoid typos. 
    ````
    export const UPDATE_TITLE = 'UPDATE_TITLE';
    ````
    - Define `action creators`(may take take in an argument(data, props, etc.) but ALWAYS returns an `action` )
    - #### Remember that `actions` is an object that:
    1) MUST have a `type` property
    2) should have a `payload` property    
    ````
    export const changeTitle = title => {
        return {
            type: CHANGE_TITLE,
            payload: title
        };
    };

    ````
6) Build `reducers`(pure functions that accept `current state` and an `action` and provide a new state).  Each reducer manages a specific part of the app's state. Using the redux `combineReducers()` utility will combine all of the app's reducers into a `single index reducer` and helps manage cleary written code.
    - define titleReducer
        ````
        export const UPDATE_TITLE = 'UPDATE_TITLE';

        export function updateTitle(newTitle) {
            return{
                type: UPDATE_TITLE,
                payload: newTitle,
            };
        }
        ````
      - #### Your `smart-component` Title will map the state in as a props using 
        ````
        const mapStateToProps = state => {
            return {
                title: state.title   BEFORE Combine Reducers
                // title: state.titleReducer.title   // AFTER Combine Reducers
            };
        };
        ```` 
      - #### Without using `combineReducers()`, the `src/index.js` will be made aware of the state by importing the reducer that manages that portion of state.
        ````
        import rootReducer from './reducers/titleReducer';
        ````

    - define rootReducer
        ````
        import {combineReducers} from 'redux';

        import titleReducer from './titleReducer';

        export default combineReducers({
            titleReducer
        });    
        ````



    - #### Saving as `index.js` allows us to be just define path as is when we import into our main `src/index.js` since`./reducers/` is equalivalent to `./reducers/index.js`.
    - ### We REPLACE  original rootReducer import in `.src/index.js` with
        ````
        import rootReducer from './reducers';
        ````
        - #### Now the `smart-component` Title will map the a specific slice of state in as a props using 
        ````
        const mapStateToProps = state => {
            return {
                //title: state.title   BEFORE Combine Reducers
                title: state.titleReducer.title   // AFTER Combine Reducers
            };
        };    
        ````







- BLAH BLAH add store & Provider to App
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
