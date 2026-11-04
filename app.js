const pokemonData = [
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    title: "Bulbasaur",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born.",
    type: "Grass",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    title: "Charmander",
    description:
      "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out. ",
    type: "Fire",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    title: "Squirtle",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force. ",
    type: "Water",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    title: "Caterpie",
    description:
      "For protection, it releases a horrible stench from the antenna on its head to drive away enemies. ",
    type: "Bug",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    title: "Weedle",
    description:
      "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves. ",
    type: "Bug",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    title: "Pidgey",
    description:
      "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back. ",
    type: "Normal",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    title: "Rattata",
    description:
      "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area. ",
    type: "Normal",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    title: "Spearow",
    description:
      "Inept at flying high. However, it can fly around very fast to protect its territory. ",
    type: "Normal",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    title: "Ekans",
    description:
      "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest. ",
    type: "Poison",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    title: "Pikachu",
    description:
      "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks. ",
    type: "Electric",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    title: "Sandshrew",
    description:
      " It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body. ",
    type: "Ground",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    title: "Nidoran",
    description:
      "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators. ",
    type: "Poison",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    title: "Clefairy",
    description:
      " It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon. ",
    type: "Fairy",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    title: "Vulpix",
    description:
      "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
    type: "Fire",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    title: "Jigglypuff",
    description:
      "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep. ",
    type: "Fairy",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    title: "Zubat",
    description:
      " It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill. ",
    type: "Poison",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    title: "Oddish",
    description:
      "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds. ",
    type: "Grass",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    title: "Paras",
    description:
      "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition. ",
    type: "Bug",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    title: "Venonat",
    description:
      "Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light. ",
    type: "Bug",
  },
  {
    image_url:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    title: "Diglett",
    description:
      "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground. ",
    type: "Ground",
  },
];

require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());

// returns all pokemon
app.get("/pokemon", (request, response, next) => {
  response.status(200).send(JSON.stringify(pokemonData));
});

// returns a team of six pokemon
app.get("/pokemon/team", (request, response, next) => {
  let random = [];
  const n = 6;
  const uniqueIndices = Array.from({ length: pokemonData.length }, (_, i) => i)
    .sort(() => 0.5 - Math.random())
    .slice(0, n);

  for (let i = 0; i < uniqueIndices.length; i++) {
    random.push(pokemonData[uniqueIndices[i]]);
  }
  console.log(random)
  response.status(200).send(JSON.stringify(random));
});

app.listen(PORT, () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
