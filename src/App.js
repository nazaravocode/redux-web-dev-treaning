import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {setItem} from './actions/App/AppActions'
 import Button from './components/Button';
function App(props) {
    const {onAddX} = props;
    return (
        <div className="App">
            <Button/>
        </div>
    );
}

const mapProps = (state) => ({
    rootReducer: state
})

const dispatchToProps = (dispatch) => ({
    onAddX: payload => dispatch(setItem(payload))
})

export default connect(mapProps, dispatchToProps)(App);
