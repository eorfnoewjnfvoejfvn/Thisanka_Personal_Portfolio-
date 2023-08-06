export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About Me</p>
          <h1 className="skills-section--heading">Who am I?</h1>
          <p className="hero--section-description">
            I'm based in Queenstown, New Zealand, a place of stunning natural beauty. 
            When I'm not immersed in code, you'll likely find me on the rugby field, 
            channeling my competitive spirit and teamwork skills.
          </p>
          <p className="hero--section-description">
            As an aspiring software engineer, I'm on a journey to turn my passion for technology into a fulfilling career. 
            I'm a proud Sri Lankan, and my cultural background has instilled in me a strong work ethic and a commitment to embracing diversity.
          </p>
        </div>
      </div>
    </section>
  );
}
