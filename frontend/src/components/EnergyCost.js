import React from "react";
import "../styles/energyCost.css";
// import _ from "lodash";

export default function EnergyCost(props) {
  //   const viewChange = () => {
  //     props.viewSet("AllPhotos");
  //     console.log(props.currentView);
  //   };
  return (
    <>
      <label>消費エネルギー数</label>
      <select id="energyNum" name="Count">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}
