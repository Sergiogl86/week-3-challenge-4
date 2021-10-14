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

/*const busquedaPelicula = async () => {
  try {
    debugger;
    const url = "http://localhost:3001/series";
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const dataResponse = await response.json();
      console.log(dataResponse);
      console.log(dataResponse[0]);
    } else {
      throw new error("Error provocado :(");
    }
  } catch (error) {
    console.log(error.message);
  }
};

busquedaPelicula();

//const film1 = new Film("series-list", "serie", "li", film);

//Page("body", "container", "div", film);*/
