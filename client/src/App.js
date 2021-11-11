import React, {useState, useEffect} from 'react'
import {Nav} from './components/nav'
import Register from './components/register'
import Contact from './components/contact/contact'
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect
  } from 'react-router-dom'


export const App = () =>{

    useEffect(()=>{
        
    })

    return(
            <div className="App">
                    <Nav/>
            <Router>
                <Routes>
                    <Route  path="/" element={<Register/>}/>
                       
                    <Route redirect="/" element={<Contact/>}/>
                </Routes>
            </Router>
            </div>
    )
}


