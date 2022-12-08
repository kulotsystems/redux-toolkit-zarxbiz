import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Counter } from './features/counter/Counter.jsx';
import { Post } from './features/post/Post.jsx';

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
            <hr style={{marginTop: '15px', marginBottom: '15px'}}/>
            <Post/>
        </div>
    )
}

export default App
