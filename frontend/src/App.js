import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Damage from "./components/Damage"; //ダメージを記入する欄
import Energy from "./components/Energy"; //消費エネルギー数を指定する欄
import Button from "./components/Button"; //検索ボタン
import Result from "./components/Result"; //結果表示一覧

function App() {
  // useState
  const [damage, damageSet] = useState("0");
  const [energyCost, energyCostSet] = useState("");
  const [skillType, skillTypeSet] = useState("");
  const [skillTypeNum, skillTypeNumSet] = useState("");
  const [resultNum, resultNumSet] = useState(""); //検索件数を出力

  // useEffect(() => { }, []);
  console.log(damage);

  console.log(resultNum);
  return (
    <>
      <Damage damage={damage} damageSet={damageSet} />
      <Energy
        energyCost={energyCost}
        energyCostSet={energyCostSet}
        skillType={skillType}
        skillTypeSet={skillTypeSet}
        skillTypeNum={skillTypeNum}
        skillTypeNumSet={skillTypeNumSet}
      />

      <Button
        damage={damage}
        energyCost={energyCost}
        skillType={skillType}
        skillTypeNum={skillTypeNum}
        resultNum={resultNum}
        resultNumSet={resultNumSet}
      />

      <Result
        resultNum={resultNum}
        resultNumSet={resultNumSet}
        // ??????
      />
    </>
  );
}

export default App;
