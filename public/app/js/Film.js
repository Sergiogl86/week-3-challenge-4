import Component from "./Component.js";

class Film extends Component {
  name;
  creator;
  poster;
  year;
  filmHTML;
  constructor(parentElement, className, tag, film) {
    super(parentElement, className, tag);
    this.name = film.name;
    this.creator = film.creator;
    this.poster = film.poster;
    this.year = film.year;

    //const filmPosition = this.element.querySelector(parentElement);

    this.element.className = className;
    this.element.innerHTML = this.generateFilmHTML(
      this.name,
      this.creator,
      this.year,
      this.poster
    );
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
