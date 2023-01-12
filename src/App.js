import React, { Component } from 'react';
import { Dashboard } from './components/dashboard/dashboard';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Shared from './components/shared/Shared';
import Starred from './components/Starred/Starred';
import Bin from './components/Bin/Bin';
import Settings from './components/Settings/Settings';
import PrivateRoutes from './components/PrivateRoutes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<PrivateRoutes />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/shared' element={<Shared />} />
              <Route path='/star' element={<Starred />} />
              <Route path='/bin' element={<Bin />} />
              <Route path='/settings' element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
