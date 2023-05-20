import "./home.css";
import MaterialIcon, { colorPalette } from "material-icons-react";
import Gif from "../../resources/home-gif.gif";

import Resume from "../../resources/resume.pdf"

const Home = () => {

    const viewResume = () => {
        window.open(Resume);
    }

  return (
    <div className="home">
      <div className="home-content">
        <div className="left-section">
          <div className="intro">
            <p>HELLO, MY NAME IS</p>
            <p className="underline"></p>
          </div>
          <div className="name">
            <p className="title">ARINDAM PATRA</p>
            <p className="subtitle">AEM DEVELOPER | FULL STACK DEVELOPER</p>
          </div>

          <div className="connect">
            <div>
              <MaterialIcon icon="email" />{" "}
              <span>arindampatra15@gmail.com</span>
            </div>
            <div>
              <MaterialIcon icon="call" /> <span>+91 8190068206</span>
            </div>
            <div>
              <MaterialIcon icon="assignment" /> <span onClick={viewResume}>My Resume</span>
            </div>
          </div>
        </div>

        <div className="right-section">
          <img src={Gif}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
