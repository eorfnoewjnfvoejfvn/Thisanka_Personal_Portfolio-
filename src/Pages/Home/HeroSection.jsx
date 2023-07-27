export default function HeroSection() {
    return (
      <section id="heroSection" className="hero-section">
        <div className="hero-section-content-box">
          <div className="hero-section-content">
            <p className="section-title">Kia Ora, I'm Thisanka</p>
            <h1 className="hero-section--title">
              <span className="hero-section-title--color">A Future</span>{" "}
              <br />
              Software engineer
            </h1>
            <p className="hero-section-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Maxime impedit ullam sapiente corrupti dolorem cum!
            </p>
          </div>
          <button className="btn btn-primary">Contact me</button>
        </div>
        <div className="hero-section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }

