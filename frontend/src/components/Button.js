import React from "react";
import "../styles/button.css";
// import _ from "lodash";
console.log(process.env.DATABASE_URL, "//", process.env);
export default function Button(props) {
  const getAllPoke = async () => {
    let result = [];
    console.log("ボタン押された");

    const pokeArray = await fetch(
      "https://sample-pokemon.onrender.com/api/poke"
    ); //.then((e) =>
    result = await pokeArray.json();
    props.resultNumSet(result);
  };

  return (
    <>
      <div>
        <button className="search" id="search" onClick={getAllPoke}>
          検索
        </button>
        <button className="reset" id="reset">
          リセット
        </button>
      </div>
    </>
  );
}
