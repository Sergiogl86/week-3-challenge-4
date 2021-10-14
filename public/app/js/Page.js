class Page {
  element;
  constructor(parentElement, className, tag = "div") {
    const positionPage = document.getElementsByTagName("body");
    this.element = document.createElement("div");
    this.element.className = "container";
    this.generateHTML();

    positionPage[0].append(this.element);
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
}

export default Page;
