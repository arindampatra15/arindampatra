import Header from "../header/header";

import "./about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <div className="about-title">
            <p>
              I am an enthusiastic web developer based in Bengaluru, with a rich
              experience of over 2.5 years in website & product design.
            </p>
          </div>

          <div className="about-content-sections">
            <div className="left-section">
              <p>I design professional & beautiful websites</p>
            </div>

            <div className="right-section">
              <p>
                {" "}
                With years of experience in graphic and web design I have
                mastered the skills of understanding client requirements
                according to the latest trends. I have worked with businesses
                from different niches so you can rely on me for yours.
                <br />
                <br />
                I’ve spent most of these years working across different areas of
                design like front-end development, landing pages, email design,
                app UI/UX, to my current role designing products for mobile
                platforms. Having worked on various projects that are already
                live, I can help you with the best possible suggestions and
                ideas that we can proceed with. With me, you aren’t forced to
                accept anything. I give you a variety of options we can work on
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
