import React from "react";
import "../styles/energy.css";
import EnergyCost from "./EnergyCost";
import SkillType from "./SkillType";

// import _ from "lodash";

export default function Energy(props) {
  //   const viewChange = () => {
  //     props.viewSet("AllPhotos");
  //     console.log(props.currentView);
  //   };
  return (
    <>
      <div className="energy">
        <EnergyCost
        // currentView={currentView}
        />
        <SkillType
        // phots={phots}
        />
      </div>
    </>
  );
}
