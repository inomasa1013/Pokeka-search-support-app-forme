const pokedataJSON = require("./cardData40000-41357.json");
const fs = require("fs");

const newArray = [];
const newObj = {};
//{cardID:,name:,cardURL:,Attack1name:,Attack1damage:,Attackenergy1:, ... }
function aaaaaaaaa(pokedataJSON) {
  pokedataJSON.map((obj) => {
    // console.log(obj.Attack[0].name);
    if (obj.Attack.length !== 0) {
      obj.Attack1name = obj.Attack[0].name;
      obj.Attack1damage = obj.Attack[0].damage;
      obj.Attack1energy1 = obj.Attack[0].energy1;
      obj.Attack1energy2 = obj.Attack[0].energy2;
      obj.Attack1energy3 = obj.Attack[0].energy3;
      obj.Attack1energy4 = obj.Attack[0].energy4;
      obj.Attack1energy5 = obj.Attack[0].energy5;
      if (obj.Attack.length === 2) {
        obj.Attack2name = obj.Attack[1].name;
        obj.Attack2damage = obj.Attack[1].damage;
        obj.Attack2energy1 = obj.Attack[1].energy1;
        obj.Attack2energy2 = obj.Attack[1].energy2;
        obj.Attack2energy3 = obj.Attack[1].energy3;
        obj.Attack2energy4 = obj.Attack[1].energy4;
        obj.Attack2energy5 = obj.Attack[1].energy5;
      }
    }
  });
  let pokeJSON = pokedataJSON.filter((obj) => obj.Attack.length !== 0);

  pokeJSON.forEach((element, index) => {
    if (element.Attack.length !== 0) {
      delete element.Attack;
    }
  });
  //   console.log(pokeJSON);
  fs.writeFile("cardData.json", JSON.stringify(pokeJSON, null, 2), (err) => {
    if (err) {
      console.error("エラーが発生しました:", err);
    } else {
      console.log("カードデータが正常に保存されました。");
    }
  });
}
aaaaaaaaa(pokedataJSON);
