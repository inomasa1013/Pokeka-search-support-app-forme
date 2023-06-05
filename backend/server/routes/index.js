const path = require("path");
const knexfile = require("../../data/index.js");
const knex = require("knex")(knexfile);
let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/build/index.html"));
});

router.get("/api/poke", async (req, res) => {
  // if (req.query === null) {
  // knexでオブジェクトを作る----------
  const AllPokemon = () => {
    return knex.select("*").from("pokemon").limit(10);
  };

  const AllpokemonObj = await AllPokemon();
  // console.log(AllpokemonObj);
  // knexでオブジェクトを作る(end)-----
  res.status(200).json(AllpokemonObj);
  // } else if (
  //   req.query.damege !== undefined &&
  //   req.query.terms !== undefined &&
  //   req.query.energycost !== undefined &&
  //   req.query.type1 !== undefined &&
  //   req.query.num1 !== undefined
  // ) {
  //   //重複した式なので最初のif文に入る前にallPokemonだけは定義しておく。
  //   const AllPokemon = () => {
  //     return knex.select("*").from("pokemon").limit(100);
  //   };
  //   const AllpokemonObj = await AllPokemon();

  //   //energycost用メソッド
  //   const terms = {
  //     yoriChisai(atk) {
  //       req.query.damege < atk.Attack1damage;
  //     },
  //     ika(atk) {
  //       return req.query.damege <= atk.Attack1damage;
  //     },
  //     hitoshii(atk) {
  //       return req.query.damege === atk.Attack1damage;
  //     },
  //     yoriOokii(atk) {
  //       return req.query.damege > atk.Attack1damage;
  //     },
  //     izyou(atk) {
  //       return req.query.damege >= atk.Attack1damage;
  //     },
  //   };
  //   //ポケモンが持つAttackenergyとreq.queryの比較
  //   const counter = (obj, req) => {
  //     let count = 0;
  //     for (const elem in obj) {
  //       if (obj[elem] === req.query.type1) {
  //         count += 1;
  //       }
  //     }
  //     return count;
  //   };
  //   //typeがundefinedだった場合のコードも追記
  //   //type2以降がundefinedならスキップする
  //   const filteredPokemon = AllpokemonObj.filter((atk1) =>
  //     terms[req.query.terms](atk1)
  //   )
  //     .filter((atk2) => terms[req.query.terms](atk2))
  //     .filter((eneCost) => eneCost >= req.query.energycost)
  //     .filter((type1) => counter(type1, req) === req.query.num1)
  //     .filter((type2) => counter(type2, req) === req.query.num2)
  //     .filter((type3) => counter(type3, req) === req.query.num3)
  //     .filter((type4) => counter(type4, req) === req.query.num4)
  //     .filter((type5) => counter(type5, req) === req.query.num5);

  //   req.query.damege;
  //   req.query.terms;
  //   req.query.energycost;
  //   req.query.type1;
  //   req.query.num1;
  //   req.query.type2;
  //   req.query.num2;
  //   req.query.type3;
  //   req.query.num3;
  //   req.query.type4;
  //   req.query.num4;
  //   req.query.type5;
  //   req.query.num5;
  // } else {
  //   res.status(400).json("項目を入力して下さい");
  // }
});

module.exports = router;
