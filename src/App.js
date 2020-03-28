import React from 'react';
import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
}
`

function App() {
  return (
    <>
  <GlobalStyle/>
    </>
  );
}

export default App;
