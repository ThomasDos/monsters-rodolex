import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [monstersInit, setMonstersInit] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resjson) => {
        setMonsters(resjson);
        setMonstersInit(resjson);
      });
  }, []);

  function handleOnChange(event) {
    let myValue = event.target.value;
    myValue = myValue.toLowerCase();

    setMonsters(
      monstersInit.filter((elem) => {
        let monsterCompared = elem.name;
        monsterCompared = monsterCompared.toLowerCase();
        return monsterCompared.includes(myValue) && elem.name;
      })
    );
  }

  return (
    <div className="App">
      <h1>My Monsters</h1>
      <SearchBar onChange={handleOnChange} />
      <div className="card-list">{monsters.map(Card)}</div>
    </div>
  );
}

export default App;
