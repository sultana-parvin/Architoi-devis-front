import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape9.scss";

// import icon svg
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";
import gammeS from "../../assets/images/icons/gammeStandard.svg";
import gammeP from "../../assets/images/icons/gammePremium.svg";
import gammeL from "../../assets/images/icons/gammeLuxe.svg";

function Etape9() {
  const now = 90;
  return (
    <div className="content">
      <section className="etape9">
        <div className="etape9-container">
          <h2 className="etape9-container--title">
            <span className="etape9-container--span">9.</span>Enfin, la gamme
            des matériaux
          </h2>
          <hr />
          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <input
                  type="radio"
                  id="proprietaire"
                  value="standard"
                  required
                />
                <label htmlFor="proprietaire">
                  <img className="form-icon" src={gammeS} alt="icon" />
                  Gamme standard
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="encours" value="premium" />
                <label htmlFor="encours">
                  <img className="form-icon" src={gammeP} alt="icon" />
                  Gamme premium
                </label>
              </div>
              <div className="form-options">
                <input type="radio" id="proprietaire" value="luxe" />
                <label htmlFor="proprietaire">
                  <img className="form-icon" src={gammeL} alt="icon" />
                  Gamme Luxe
                </label>
              </div>

              <div className="form-btn">
                <Link to="/etape8">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape10">
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
      <aside className="asideEtape9">
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

export default Etape9;
