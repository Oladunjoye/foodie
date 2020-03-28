import React from 'react';
import {createGlobalStyle} from 'styled-components'
import {Banner} from "./components/Banner/Banner"
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu';



const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: 'Open Sans', sans-serif;


  h1, h2,h3{
  font-family: 'Righteous', cursive;
  color: rgba(0,0,0,0.9);

  }
}
`

function App() {
  return (
    <>
  <GlobalStyle/>
  <Navbar/>
  <Banner/>
  <Menu/>
    </>
  );
}

export default App;
