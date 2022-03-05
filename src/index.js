import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
//import HelloComponent from './components/HelloComponent';
import Image from './Image';
import List from './List';
import Test from './Test';
//import { ReactComponent } from '*.svg';

//const Hello = () => {

  //return <p>hello</p>
//}
//import reportWebVitals from './reportWebVitals';

  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

ReactDOM.render(<List />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('root'));
//ReactDOM.render(<Hello />, document.getElementById('root'));

//ReactDOM.render(<App/>, document.getElementById('root'));
//const HelloComponent = () => {
  //return <p> HelloComponent </p>
//}

  //ReactDOM.render(<HelloComponent />, document.getElementById('root'));
//class StatefullComponent extends React.Component{
  //render () {
    //return <p>StatefullComponent</p>
  //}
//}

//ReactDOM.render(<StatefullComponent />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
