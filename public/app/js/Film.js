import Component from "./Component.js";

class Film extends Component {
  name;
  creator;
  poster;
  year;
  filmHTML;
  constructor(parentElement, className, tag, film) {
    debugger;
    super(parentElement, className, tag);
    this.name = film[0].name;
    this.creator = film[0].creator;
    this.poster = film[0].poster;
    this.year = film[0].year;
    debugger;

    //const filmPosition = this.element.querySelector(parentElement);

    this.element.className = className;
    this.element.innerHTML = this.generateFilmHTML(
      this.name,
      this.creator,
      this.year,
      this.poster
    );
    this.filmHTML = filmContent;
    this.element.append(filmContent);
  }

  generateFilmHTML(name, creator, year, poster) {
    const html = `<img
                  class="serie__poster"
                  src="${poster}"
                  alt="${name} poster"
                />
                <h4 class="serie__title">${name}</h4>
                <p class="serie__info">${creator} (${year})</p>
                <ul class="score">                  
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>`;
    return html;
  }
}

export default Film;
