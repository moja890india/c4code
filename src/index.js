import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './route'

const App = (props) => {
    // console.log(props)
    return (
        <BrowserRouter >
            <Routes />
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
