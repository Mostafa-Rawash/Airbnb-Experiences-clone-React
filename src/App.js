import './App.css';
import React from "react"
import Header from "./Templates/Header";
import MainContent from "./Templates/MainContent";
import Footer from "./Templates/footer";


/* BOOTSTRAP */
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row'; 
// import Col from 'react-bootstrap/Col';


function App() {
  return (
    <container className="full-body">
      <Header /> 
      <MainContent />
    </container>
  );
} 

export default App; 
