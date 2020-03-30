import React  from 'react';
import {Banner} from "./components/Banner/Banner"
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu';
import {GlobalStyle} from './Styles/GlobalStyle'
import FoodModal from './components/FoodModal/FoodModal';
import Order from './components/Order/Order';
import {useSelectedFood} from './Hooks/useSelectedFood'
import {useOrders} from './Hooks/useOrders'
import {useTitle} from './Hooks/useTitle'







function App() {

  const selectedFood =  useSelectedFood()
  const orders = useOrders()
  useTitle(selectedFood, orders)
  return (
    <>
  <GlobalStyle/>
  <FoodModal {...selectedFood} {...orders}/>
  <Navbar/>
  <Order {...orders}/>

  <Banner/>
  <Menu setFood = {selectedFood.setFood} />
    </>
  );
}

export default App;
