import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape10.scss";

// import icon svg
import prix from "../../assets/images/icons/prix.svg";
import qualite from "../../assets/images/icons/question.svg";
import conseils from "../../assets/images/icons/conseils.svg";
import delais from "../../assets/images/icons/delais.svg";
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";

function Etape10() {
  const now = 100;
  return (
    <div className="content">
      <section className="etape10">
        <div className="etape10-container">
          <h2 className="etape10-container--title">
            <span className="etape10-container--span">10.</span>Critére décisif
            de choix
          </h2>
          <hr />
          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <input type="radio" id="proprietaire" value="prix" required />
                <label htmlFor="proprietaire">
                  <img className="form-icon" src={prix} alt="icon" />
                  Prix
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="encours" value="qualite" />
                <label htmlFor="encours">
                  <img className="form-icon" src={qualite} alt="icon" />
                  Qualité des travaux
                </label>
              </div>
              <div className="form-options">
                <input
                  type="radio"
                  id="proprietaire"
                  value="accompagnement_conseils"
                />
                <label htmlFor="proprietaire">
                  <img className="form-icon" src={conseils} alt="icon" />
                  Accompagnement et conseils
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="proprietaire" value="delai" />
                <label htmlFor="proprietaire">
                  <img className="form-icon" src={delais} alt="icon" />
                  Délais des travaux
                </label>
              </div>

              <div className="form-btn">
                <Link to="/etape9">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape11">
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
      <aside className="asideEtape10">
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

export default Etape10;
