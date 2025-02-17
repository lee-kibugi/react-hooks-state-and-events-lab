import React from "react";
import ShoppingList from "./ShoppingList";
import Item from "./Item";
import items from "../data/items"

import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [darkMode,setDarkMode]= useState(false);

  // const change =

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
    
  );
}

export default App;
