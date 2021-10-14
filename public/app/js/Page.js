import Film from "./Film.js";
import Component from "./Component.js";

class Page extends Component {
  peliculas;
  constructor(parentElement, className, tag, film) {
    super(parentElement, className, tag);
    this.generateHTML();
    debugger;
    (() => {
      this.busquedaPelicula();
    })();
    //const film1 = new Film(".series-list", "serie", "li", film);
  }
  generateHTML() {
    const html = ` <header class="main-header">
          <h1 class="main-title">My Series</h1>
        </header>
        <main class="main">
          <section class="form">
            <form>
          </section>
          <section class="series">
           <h2 class="section-title">Series list</h2>
            <i class="icon--add fas fa-plus-circle"></i>
             <section class="series-pending"> 
             <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
             <ul class="series-list">
             </ul>
            </section>
            <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
             <ul class="series-list series-list--watched">
             </ul>
            </section>
          </section>
        <section class="ranking">
        </section>
        </main>`;

    this.element.innerHTML = html;
  }
  busquedaPelicula = async () => {
    try {
      debugger;
      const url = "http://localhost:3001/series";
      const response = await fetch(url);
      //console.log(response);
      if (response.ok) {
        const dataResponse = await response.json();
        console.log(dataResponse);
        debugger;
        dataResponse.map((dataResponse) => {
          let film1 = new Film(".series-list", "serie", "li", dataResponse);
        });
      } else {
        throw new error("Error provocado :(");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

export default Page;
