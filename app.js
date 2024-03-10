const express = require("express");
const sequelize = require("./utils/database");
const Player = require("./model/player");
const bodyparser=require('body-parser')

const app = express();
const cors = require("cors");



app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json({extended:false}))
app.use(cors());

app.get("/player/:name", (req, res) => {
  const { name } = req.params;
  console.log(name);
  Player.findAll({ where: { name: name } })
    .then((players) => {
      res.status(200).json({
        data: players,
      });
    })
    .catch((err) => console.log(err));
});

app.post("/player", (req, res) => {
  const player = req.body;
  Player.create({
    name: player.name,
    dob: player.dob,
    photoUrl: player.photoUrl,
    birthplace: player.birthplace,
    noOfMatches: player.noOfMatches,
    score: player.score,
    fifties: player.fifties,
    hundreds: player.hundreds,
    wicket: player.wicket,
    Average: player.Average,
  })
  .then((result) => {
      res.status(201).json({
        message: "Player added successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});


app.post("/deletePlayer/:name", (req, res) => {
    const { name } = req.params;
    console.log("Delete Call" + name);
    Player.destroy({ where: { name: name } })
      .then((result) => {
        res.status(201).json({
          message: "Player deleted successfully",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  

//sequelize.sync({force:true});

sequelize.sync()

app.listen(3000);