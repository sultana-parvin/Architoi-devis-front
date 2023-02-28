import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape3.scss";

// import icons svg
import proprio from "../../assets/images/icons/proprietaire.svg";
import curieux from "../../assets/images/icons/curieux.svg";
import enCours from "../../assets/images/icons/enCours.svg";
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";

function Etape3() {
  const now = 30;
  return (
    <div className="content">
      <section className="etape3">
        <div className="etape3-container">
          <h2 className="etape3-container--title">
            <span className="etape3-container--span">3.</span>Je suis
          </h2>
          <hr />

          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <input
                  type="radio"
                  name="type_bien"
                  id="proprietaire"
                  value="proprietaire"
                  required
                />
                <label htmlFor="proprietaire">
                  <img
                    className="form-icon"
                    src={proprio}
                    alt="icon proprietaire"
                  />
                  Propriétaire
                </label>
              </div>
              <div className="form-options">
                <input
                  type="radio"
                  name="type_bien"
                  id="encours"
                  value="en-cours"
                />
                <label htmlFor="encours">
                  <img
                    className="form-icon"
                    src={enCours}
                    alt="icon en cours"
                  />
                  En cours d'acquisition
                </label>
              </div>
              <div className="form-options">
                <input type="radio" name="type_bien" id="qst" value="curieux" />
                <label htmlFor="qst">
                  <img className="form-icon" src={curieux} alt="icon curieux" />
                  Curieux
                </label>
              </div>
              <div className="form-btn">
                <Link to="/etape2">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape4">
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
      <aside className="asideEtape3">
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

export default Etape3;
