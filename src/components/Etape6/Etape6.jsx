import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape6.scss";

// import icon svg
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";
import go from "../../assets/images/icons/go.svg";
import run from "../../assets/images/icons/run.svg";
import time from "../../assets/images/icons/time.svg";
import calc from "../../assets/images/icons/calc.svg";

function Etape6() {
  const now = 60;
  return (
    <div className="content">
      <section className="etape6">
        <div className="etape6-container">
          <h2 className="etape6-container--title">
            <span className="etape6-container--span">6.</span>Quand ?
          </h2>
          <p className="etape6-container--paragraph">
            Quand souhaites-tu débuter ton projet ?
          </p>
          <hr />
          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <input
                  type="radio"
                  id="proprietaire"
                  value="go_vite"
                  required
                />
                <label htmlFor="proprietaire">
                  <img className="form-icon" src={go} alt="icon proprietaire" />
                  Go, vite
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="encours" value="-2_mois" />
                <label htmlFor="encours">
                  <img className="form-icon" src={run} alt="icon en cours" />- 2
                  mois
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="qst" value="2/4_mois" />
                <label htmlFor="qst">
                  <img className="form-icon" src={time} alt="icon curieux" />
                  Entre 2 et 4 mois
                </label>
              </div>

              <div className="form-options">
                <input type="radio" id="qst" value="+4_mois" />
                <label htmlFor="qst">
                  <img className="form-icon" src={calc} alt="icon curieux" />
                  +4 mois
                </label>
              </div>
              <div className="form-btn">
                <Link to="/etape5">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape7">
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
      <aside className="asideEtape6">
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

export default Etape6;
