function Hireme() {
  return (
    <div className="container m-2">
      <div className="row m-1">
        <div className="col">
          <div className="p-1">
            I'm availabe for hire (send an email):&nbsp;
            <a href="mailto:ridvan.ozaydin@ridvanozaydin.com" target="_blank">
              <img src="./assets/hireme.png" style={{ height: "24px" }} />
            </a>
          </div>
        </div>
      </div>

      <div className="row m-1">
        <div className="col">
          <div className="p-1">
            If you prefer, hire me through:&nbsp;
            <a
              href="https://talent.toptal.com/resume/developers/ridvan-ozaydin"
              target="_blank"
            >
              <img src="./assets/toptal.avif" style={{ height: "24px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hireme;
