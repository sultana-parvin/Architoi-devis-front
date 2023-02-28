import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape7.scss";

// import icon svg
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";
import archi from "../../assets/images/icons/archi.svg";
import sansArchi from "../../assets/images/icons/sansArchi.svg";

function Etape7() {
  const now = 70;
  return (
    <div className="content">
      <section className="etape7">
        <div className="etape7-container">
          <h2 className="etape7-container--title">
            <span className="etape7-container--span">7.</span>Je veux ?
          </h2>
          <hr />
          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <input
                  type="radio"
                  id="proprietaire"
                  value="architecte"
                  required
                />
                <label htmlFor="proprietaire">
                  <img
                    className="form-icon"
                    src={archi}
                    alt="icon architecte"
                  />
                  Un architecte
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="encours" value="sans-architecte" />
                <label htmlFor="encours">
                  <img
                    className="form-icon"
                    src={sansArchi}
                    alt="icon sans architecte"
                  />
                  Sans architecte
                </label>
              </div>

              <div className="form-btn">
                <Link to="/etape6">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape8">
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
      <aside className="asideEtape7">
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

export default Etape7;
