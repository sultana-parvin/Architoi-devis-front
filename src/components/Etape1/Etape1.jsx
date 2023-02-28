import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape1.scss";

// import icons svg
import imgBot from "../../assets/images/icons/robot.svg";
import appart from "../../assets/images/icons/img-appart.svg";
import maison from "../../assets/images/icons/img-maison.svg";
import local from "../../assets/images/icons/img-local.svg";
import arrow from "../../assets/images/arrow/arrow.svg";

function Etape1() {
  const now = 10;

  return (
    <div className="content">
      <section className="etape1">
        <div className="etape1-box">
          <img className="etape1-box--bot" src={imgBot} alt="image bot" />
          <h3 className="etape1-box--title">Archibot</h3>
        </div>
        <div className="etape1-box2">
          <p className="etape1-box2--paragraph">
            Hello! Moi c’est Archibot, Je suis là pour t’accompagner dans ton
            projet et donner vie à tes envies. La création de ton chez toi
            entièrement digitalisée. C’est parti pour quelques minutes ensemble!
          </p>
          <h2 className="etape1-box2--titre">
            <span className="etape1-box2--span">1.</span>
            C'est pour ?
          </h2>
          <hr />
          <form className="form">
            <div className="form-container">
              <div className="form-options">
                <input
                  type="radio"
                  id="appart"
                  name="appartement"
                  value="appartement"
                  required
                />
                <label htmlFor="appart">
                  <img
                    className="form-icon"
                    src={appart}
                    alt="icon appartement"
                  />
                  Mon appartement
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="maison" name="maison" value="maison" />
                <label htmlFor="maison">
                  <img className="form-icon" src={maison} alt="icon maison" />
                  Ma maison
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="local" name="local" value="local" />
                <label htmlFor="local">
                  <img className="form-icon" src={local} alt="icon local" />
                  Local/Restaurant/Tertiaire
                </label>
              </div>
              <div className="form-btn">
                <Link to="/etape2">
                  <button className="form-btn--style">
                    Suivant
                    <img src={arrow} alt="arrow image" />
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <aside className="asideEtape1">
        <ProgressBar
          className="progressBar"
          variant="success"
          animated
          now={now}
          label={`${now}%`}
        />
      </aside>
    </div>
  );
}

export default Etape1;
