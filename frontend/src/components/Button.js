import React, { useState } from "react";
import "../styles/button.css";
// import _ from "lodash";
export default function Button(props) {
  const [result, setResult] = useState([]);

  const getAllPoke = async () => {
    let result = [];
    console.log("ボタン押されたよ");
    const pokeArray = await fetch("/api/poke"); //.then((e) =>

    result = await pokeArray.json();
    console.log(result); // props.resultNumSet(result);
    setResult(result);

    console.log("resultNumSet(result)", props.resultNumSet(result));
  };
  // const getAllPoke = async () => {
  //   let result = [];
  //   console.log("ボタン押された");

  //   const pokeArray = await fetch("/api/poke"); //.then((e) =>
  //   result = await pokeArray.json();
  //   props.resultNumSet(result);
  // };
  // const getAllPoke = async () => {
  //   let result = [];

  //   const pokeArray = await fetch("/api/poke"); //.then((e) =>
  //   result = await pokeArray.json();
  //   return result;
  // };

  // const listPoke = await getAllPoke().then((data) => {
  //   console.log(data);
  //   const result = data.map((poke) => {
  //     return <li key={poke.toString}>{poke.name}</li>;
  //   });
  //   console.log(result);
  //   return result;
  // });
  // console.log(listPoke);
  return (
    <>
      <div>
        <button className="search" id="search" onClick={getAllPoke}>
          検索
        </button>
        <button className="reset" id="reset">
          リセット
        </button>
        <ul>
          {result.map((pokemon) => (
            <li key={pokemon.cardID}>
              <span>Name: {pokemon.name} </span>
              <span>Card ID: {pokemon.cardID} </span>
              <span>Attack 1 Name: {pokemon.Attack1name} </span>
              <span>Attack 1 Damage: {pokemon.Attack1damage} </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
