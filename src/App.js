import React, { Component } from 'react';
import { Dashboard } from './components/dashboard/dashboard';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import './App.css';
import { Routes,Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={ <Signup /> }/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
