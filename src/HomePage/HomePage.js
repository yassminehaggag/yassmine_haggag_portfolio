import homepage from "./Assets/homepage.png";

import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <section>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="home-container">
          <div className="home-text">
            <h1>
              <span>
                Hello, I'm
                <br />
                Yassmine Haggag
              </span>
            </h1>
            <h2>
              <span>Software Developer</span>
            </h2>
            <p>
              <span>
                Just a passionate junior software developer that has
                a passion for machine learning/computer vision
              </span>
            </p>
          </div>
          <img className="bounce" src={homepage} alt="astronaut"></img>
        </div>
      </section>
    </>
  );
}

export default HomePage;
