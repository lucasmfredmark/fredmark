function App() {
  return (
    <div className="App">
      <div className="App-header mb-4 p-4">
        <div className="container text-center">
          <h1>Hi, I'm Lucas</h1>
          <p className="lead">
            I'm a software engineer from Copenhagen, Denmark.
            <br />I specialize in web technologies and have a passion for music.
          </p>
          <img
            src="/images/lucas.jpg"
            width="200"
            height="200"
            alt="Lucas Fredmark"
            title="Lucas Fredmark"
            className="img-thumbnail rounded-circle mb-4"
          />
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <a
              href="https://github.com/lucasmfredmark"
              title="GitHub"
              className="btn btn-lg btn-brand-github"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://dk.linkedin.com/in/lucasmfredmark"
              title="LinkedIn"
              className="btn btn-lg btn-brand-linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="mailto:lucas.m.fredmark@gmail.com"
              title="E-mail"
              className="btn btn-lg btn-secondary"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mb-3">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + '/images/webdj.png'}
                alt="WebDJ"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">WebDJ</h5>
                <p className="card-text">
                  WebDJ is a DJ mixing app running in the browser. It has mixing
                  capabilities such as equalization, volume and crossfader
                  controls, tempo faders and waveform previews. It also has a
                  library where you can upload audio files, which will
                  automatically extract useful meta data from the audio file.
                </p>
                <div className="d-flex flex-wrap gap-1 mb-4">
                  <span className="badge rounded-pill bg-secondary">
                    ReactJS
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    Web Audio API
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    Web MIDI API
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    Material UI
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    Node.js
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    NestJS
                  </span>
                  <span className="badge rounded-pill bg-secondary">MySQL</span>
                </div>
                <a
                  href="https://webdj.fredmark.dk/"
                  className="btn btn-primary"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + '/images/avatarchat.png'}
                alt="Avatar chat"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Avatar chat</h5>
                <p className="card-text">
                  Social chat where you can create and customize your own avatar
                  in a virtual world. You can also chat with other people in
                  real-time and explore the different rooms in the world. While
                  playing you will unlock credits to buy clothes from the shop,
                  which can be used to change the appearance of your avatar.
                </p>
                <div className="d-flex flex-wrap gap-1 mb-4">
                  <span className="badge rounded-pill bg-secondary">
                    ReactJS
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    Semantic UI
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    Node.js
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    Express.js
                  </span>
                  <span className="badge rounded-pill bg-secondary">
                    MongoDB
                  </span>
                </div>
                <a href="https://chat.fredmark.dk/" className="btn btn-primary">
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4">
        <h2 className="text-center mb-3">Skills / Technologies</h2>
        <div className="d-flex flex-wrap justify-content-center gap-1 fs-5">
          <span className="badge rounded-pill bg-secondary">HTML</span>
          <span className="badge rounded-pill bg-secondary">CSS</span>
          <span className="badge rounded-pill bg-secondary">JavaScript</span>
          <span className="badge rounded-pill bg-secondary">jQuery</span>
          <span className="badge rounded-pill bg-secondary">PHP</span>
          <span className="badge rounded-pill bg-secondary">MySQL</span>
          <span className="badge rounded-pill bg-secondary">Node.js</span>
          <span className="badge rounded-pill bg-secondary">MongoDB</span>
          <span className="badge rounded-pill bg-secondary">ReactJS</span>
          <span className="badge rounded-pill bg-secondary">Java</span>
          <span className="badge rounded-pill bg-secondary">Python</span>
          <span className="badge rounded-pill bg-secondary">Docker</span>
          <span className="badge rounded-pill bg-secondary">Microservices</span>
          <span className="badge rounded-pill bg-secondary">RESTful API</span>
          <span className="badge rounded-pill bg-secondary">SOAP API</span>
          <span className="badge rounded-pill bg-secondary">Linux</span>
          <span className="badge rounded-pill bg-secondary">Git</span>
        </div>
      </div>
    </div>
  );
}

export default App;
