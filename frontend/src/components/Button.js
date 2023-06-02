import React from "react";
import "../styles/button.css";
// import _ from "lodash";

export default function Button(props) {
  const getAllPoke = async () => {
    let result = [];
    console.log("ボタン押されたよ");

    const pokeArray = await fetch(
      process.env.DATABASE_URL || "http://localhost:8080/api/poke"
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
