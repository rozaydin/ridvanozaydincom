function Experience() {
  const totalYears = new Date().getFullYear() - 2007;
  return (
    <div className="shadow p-3 mb-5 bg-body rounded">
      <div style={{ height: "60px !important" }} className="twocell">
        <div className="part">
          <div>
            <span className="experience">
              Developing since: <span className="highlight">2007</span>
            </span>
            <span className="experience">
              <span className="highlight">{totalYears}</span> years of
              experience
            </span>
          </div>
        </div>
        <div className="part">
          <img className="hacker" src="/assets/hacker.png" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
