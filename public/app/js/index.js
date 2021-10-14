import Page from "./Page.js";

const film = [
  {
    id: 1,
    name: "The Sopranos",
    creator: "David Chase",
    year: 1999,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    watched: true,
    score: 5,
    emmies: 21,
  },
];

console.log(film[0].name);

const mainComponent = new Page("body", "container", "div", film);
//const film1 = new Film("series-list", "serie", "li", film);

//Page("body", "container", "div", film);
