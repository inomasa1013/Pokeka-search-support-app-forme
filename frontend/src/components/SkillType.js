import React from "react";
import "../styles/skilltype.css";

// import _ from "lodash";

export default function SkillType(props) {
  //   const viewChange = () => {
  //     props.viewSet("AllPhotos");
  //     console.log(props.currentView);
  //   };
  return (
    <>
      <label>技属性</label>
      <select id="skillType" name="Type">
        <option value="1">草</option>
        <option value="2">炎</option>
        <option value="3">水</option>
        <option value="4">雷</option>
        <option value="5">超</option>
        <option value="6">闘</option>
        <option value="7">悪</option>
        <option value="8">鋼</option>
        <option value="9">無</option>
      </select>
      <label>必要数</label>
      <select id="skillTypeNum" name="Type">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <img src={`${process.env.PUBLIC_URL}/images/1_grass.png`} />
      <img src={`${process.env.PUBLIC_URL}/images/2_fire.png`} />
    </>
  );
}
