const cheerio = require("cheerio");
const https = require("https");
let resultArr = [];
let obj = {
  cardID: "",
  name: "",
  Attack: [],
  cardURL: "",
};

const url = `https://www.pokemon-card.com/card-search/details.php/card/${cardID}/regu/XY`;

https
  .get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      const $ = cheerio.load(data);
      obj.name = $("h1").text();

      $("h4").each((i, elem) => {
        if ($(elem).find(".f_right").text().trim() !== "") {
          let attack = {
            name: "",
            damage: "",
            energy1: "",
            energy2: "",
            energy3: "",
            energy4: "",
            energy5: "",
          };

          attack.name = $(elem).contents().not(".f_right").text().trim();
          attack.damage = $(elem).find(".f_right").text().trim();

          $(elem)
            .find('span[class^="icon-"]')
            .each((j, energyElem) => {
              if (j < 5) {
                attack[`energy${j + 1}`] = $(energyElem).attr("class");
              }
            });

          obj.Attack.push(attack);
          obj.cardURL = cardID;
          obj.cardURL = url;
        }
      });

      console.log(obj);
    });
  })
  .on("error", (error) => {
    console.error("エラーが発生しました:", error);
  });
