import {
  Api,
  Article,
  Doc,
  Footer,
  Form,
  Hero,
  Nav,
  Newsletter,
  Notes,
  Notifications,
  Section,
  SectionColors,
  SvgIcons,
  Typography
} from "../src/composants";

const App = () => (
  <div>
    <SvgIcons />
    <Nav />
    <Hero title="titre 1" subTitle="subTitle 1" />
    <Section
      className="section-dark"
      title="Titre de section 2"
      subTitle="subTitle 2"
    >
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="column">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p className="column">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </Section>
    <Section title="Titre de section 3" subTitle="subTitle 3">
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="column">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p className="column">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </Section>
    <Section
      className="section-color"
      title="Titre de section 3"
      subTitle="subTitle 3"
    >
      <p className="column">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="column">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p className="column">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </Section>
    <Typography />
    <SectionColors />
    <Form />
    <Doc />
    <Newsletter />
    <Article />
    <Notes />
    <Notifications />
    <Api />
    <Section class="section-grey cards">
      <div class="container">
        <div class="row">
          <div class="card">
            <div class="card__cover">
              <img src="https://etalab.github.io/template.data.gouv.fr/images/shiba.jpg" />
            </div>
            <div class="card__content">
              <h3>Shiba Inu</h3>
              <div class="card__meta">
                <time>12 avril 2018</time>
                <span>Juna</span>
              </div>
              <p>
                The Shiba Inu (柴犬) is the smallest of the six original and
                distinct spitz breeds of dog from Japan.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__cover">
              <img src="https://etalab.github.io/template.data.gouv.fr/images/french.jpg" />
            </div>
            <div class="card__content">
              <h3>French Bulldog</h3>
              <div class="card__meta">
                <time>12 avril 2018</time>
                <span>Tama</span>
              </div>
              <p>
                The French Bulldog, also known as the Frenchie, is a small breed
                of domestic dog. Frenchies were the result in the 1800s of a
                cross between bulldog ancestors imported from England and local
                ratters in Paris (France).
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__cover">
              <img src="https://etalab.github.io/template.data.gouv.fr/images/corgi.jpg" />
            </div>
            <div class="card__content">
              <h3>Corgi</h3>
              <div class="card__meta">
                <time>12 avril 2018</time>
                <span>Nova</span>
              </div>
              <p>
                The Welsh Corgi, sometimes known as just a Corgi (/ˈkɔːrɡi/,
                Welsh for "dwarf dog"; plural "corgis" or occasionally the
                etymologically consistent "corgwn" (/ˈkɔːrɡuːn/)), is a small
                type of herding dog that originated in Wales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Footer />
  </div>
);

export default App;
