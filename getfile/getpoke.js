const cheerio = require("cheerio");
const https = require("https");
const fs = require("fs");

const getCardData = (cardID) => {
  return new Promise((resolve, reject) => {
    let obj = {
      cardID: cardID,
      name: "",
      Attack: [],
      cardURL: "",
    };

    const url = `https://www.pokemon-card.com/card-search/details.php/card/${cardID}/regu/XY`;

    https
      .get(url, (response) => {
        if (response.statusCode === 404) {
          resolve(null);
          return;
        }

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
              obj.cardURL = url;
            }
          });

          resolve(obj);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

const main = async () => {
  let allCardData = [];
  for (let i = 42736; i <= 44000; i++) {
    try {
      const cardData = await getCardData(i);
      if (cardData) {
        allCardData.push(cardData);
      } else {
        console.log(`Card ID ${i} does not exist.`);
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
    }
  }

  // Save all card data to a JSON file
  fs.writeFile("cardData.json", JSON.stringify(allCardData, null, 2), (err) => {
    if (err) {
      console.error("エラーが発生しました:", err);
    } else {
      console.log("カードデータが正常に保存されました。");
    }
  });
};

main();
