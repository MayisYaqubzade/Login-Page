import React , {useState} from "react";
import Login from "./Component/Login";
import { Route,Routes } from "react-router-dom";
import Register from "./Component/Register";
import { Context } from "./Context";


function App() {
  const [items,setItems] = useState(JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [])
   const data = {
    items ,
    setItems
   }

   

  return (
    <div>
      <Context.Provider value = {data}>
      <Routes>
        <Route path="/" index element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
      </Context.Provider>
   
    </div>
  );
}

export default App;
