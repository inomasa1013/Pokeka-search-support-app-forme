import React from "react";
import "../styles/button.css";
// import _ from "lodash";

export default function Button(props) {
  const getAllPoke = async () => {
    let result = [];
    console.log("ボタン押されたよ");
    const pokeArray = await fetch(
      "postgres://user:bluZmXX8ZUdtFwcDdrxTlHoiWCPD643A@dpg-chs4vhorddl7at8ori0g-a/pokemonsearch_xd5u"
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
