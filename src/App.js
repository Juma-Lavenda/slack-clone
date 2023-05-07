import React from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import SideBar from './components/SideBar';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from './components/Chat';


export default function App() {
  return (
    <div className="app">
     <Router>
      <>
        <Header />
        <AppBody>
          <SideBar />
          <Routes>
            <Route path="/" element  = { <Chat /> }></Route>
          </Routes>
        </AppBody>
      </>
    </Router>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
`;
