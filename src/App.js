import React , {useState} from 'react';
import {Banner} from "./components/Banner/Banner"
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu';
import {GlobalStyle} from './Styles/GlobalStyle'
import FoodModal from './components/FoodModal/FoodModal';
import Order from './components/Order/Order';





function App() {

  const [selectedFood, setFood] = useState()
  return (
    <>
  <GlobalStyle/>
  <FoodModal selectedFood= {selectedFood} setFood = {setFood}/>
  <Navbar/>
  <Order/>

  <Banner/>
  <Menu setFood = {setFood} />
    </>
  );
}

export default App;
