import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './features/counter/Counter.jsx';

function App() {
    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Redux Toolkit Tutorial</h1>
            <Counter/>
        </div>
    )
}

export default App
