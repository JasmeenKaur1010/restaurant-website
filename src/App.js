import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

// building main component which will have  all the other components 
const App = () =>{
  return(
  <div className ="app">
    <Header/>
    <Body/>
  </div>
  )
}


export default App;

