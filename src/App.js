import './assets/css/App.css';
import React, { Component } from 'react';
import Todolist from './components/Todolist'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      tips:''
  }
  }
  render(){
    return (
    <div className="App">
      <div className="container">
        <Todolist tips={this.state.tips}></Todolist>
      </div>
    </div>
  );
  }
  
}

export default App;
