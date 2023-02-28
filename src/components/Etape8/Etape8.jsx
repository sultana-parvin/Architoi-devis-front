import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

//import style scss
import "./Etape8.scss";

// import icon svg
import icon1 from "../../assets/images/icons/domotique.svg";
import icon2 from "../../assets/images/icons/materiauxEco.svg";
import icon3 from "../../assets/images/icons/question.svg";
import icon4 from "../../assets/images/icons/dontWant.svg";
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";

function Etape8() {
  const now = 80;
  return (
    <div className="content">
      <section className="etape8">
        <div className="etape8-container">
          <h2 className="etape8-container--title">
            <span className="etape8-container--span">8.</span>Ca peut
            m'intéresser
          </h2>
          <hr />
          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <input
                  type="radio"
                  id="proprietaire"
                  value="domotique"
                  required
                />
                <label htmlFor="proprietaire">
                  <img className="form-icon" src={icon1} alt="icon" />
                  Domotique
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="encours" value="eco_responsable" />
                <label htmlFor="encours">
                  <img className="form-icon" src={icon2} alt="icon" />
                  Matériaux eco responsable
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="proprietaire" value="question" />
                <label htmlFor="encours">
                  <img className="form-icon" src={icon3} alt="icon" />
                  Je ne sais pas
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="encours" value="interesse_pas" />
                <label htmlFor="encours">
                  <img className="form-icon" src={icon4} alt="icon" />
                  Ne m'intéresse pas
                </label>
              </div>

              <div className="form-btn">
                <Link to="/etape7">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape9">
                  <button className="form-btn--style2">
                    Suivant
                    <img src={arrow} alt="arrow image" />
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <aside className="asideEtape8">
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

export default Etape8;
