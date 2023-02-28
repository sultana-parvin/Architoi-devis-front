import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape2.scss";

// import icons svg
import iconRenovationComplete from "../../assets/images/icons/renov-compl.svg";
import iconRenovationPartielle from "../../assets/images/icons/renov-part.svg";
import iconModernisationLegere from "../../assets/images/icons/modern-leg.svg";
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";

function Etape2() {
  const now = 20;
  return (
    <div className="content">
      <section className="etape2">
        <div className="etape2-container">
          <h2 className="etape2-container--title">
            <span className="etape2-container--span">2.</span>Mon projet
          </h2>
          <p className="etape2-container--paragraph">
            Quelle est la nature du projet ?
          </p>
          <hr />

          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <input
                  type="radio"
                  name="type_bien"
                  id="rcomplete"
                  value="complete"
                  required
                />
                <label htmlFor="rcomplete">
                  <img
                    className="form-icon"
                    src={iconRenovationComplete}
                    alt="icon renovation complete"
                  />
                  Rénovation complète
                </label>
              </div>
              <div className="form-options">
                <input
                  type="radio"
                  name="type_bien"
                  id="rpartielle"
                  value="partielle"
                />
                <label htmlFor="rpartielle">
                  <img
                    className="form-icon"
                    src={iconRenovationPartielle}
                    alt="icon renovation partielle"
                  />
                  Rénovation partielle
                </label>
              </div>
              <div className="form-options">
                <input
                  type="radio"
                  name="type_bien"
                  id="refresh"
                  value="refresh"
                />
                <label htmlFor="refresh">
                  <img
                    className="form-icon"
                    src={iconModernisationLegere}
                    alt="icon refresh"
                  />
                  Rafraîchissement
                </label>
              </div>
              <div className="form-btn">
                <Link to="/">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape3">
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
      <aside className="asideEtape2">
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

export default Etape2;
