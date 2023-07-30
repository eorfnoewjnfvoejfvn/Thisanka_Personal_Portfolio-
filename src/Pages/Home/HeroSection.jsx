export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Kia Ora I'm Thisanka</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Future</span>{" "}
            <br />
            Software Engineer
          </h1>
          <p className="hero--section-description">
          I'm excited to embark on a journey of innovation and creativity, crafting elegant solutions through code. 
          With a passion for technology and a drive for excellence, I am ready to tackle the challenges of tomorrow head-on.
          </p>
        </div>
        <button className="btn btn-primary">Contact me</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}