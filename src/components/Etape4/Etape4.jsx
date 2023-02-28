import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape4.scss";

// import icon svg
import iconQuestion from "../../assets/images/icons/iconMen.svg";
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";

function Etape4() {
  const now = 40;
  return (
    <div className="content">
      <section className="etape4">
        <div className="etape4-container">
          <h2 className="etape4-container--title">
            <span className="etape4-container--span">4.</span>Mon budget
          </h2>
          <hr />

          <form className="form" action="">
            <div className="form-container">
              <div className="form-container--box">
                <div className="form-options">
                  <input
                    type="radio"
                    id="proprietaire"
                    value="15K/30K"
                    required
                  />
                  <label htmlFor="proprietaire">15k à 30K</label>
                </div>
                <div className="form-options">
                  <input type="radio" id="proprietaire" value="30K/50k" />
                  <label htmlFor="proprietaire">30K à 50K</label>
                </div>
              </div>
              <div className="form-container--box">
                <div className="form-options">
                  <input type="radio" id="proprietaire" value="50k/80k" />
                  <label htmlFor="proprietaire">50K à 80K</label>
                </div>
                <div className="form-options">
                  <input type="radio" id="proprietaire" value="80/120K" />
                  <label htmlFor="proprietaire">80K à 120K</label>
                </div>
              </div>
              <div className="form-container--box">
                <div className="form-options">
                  <input type="radio" id="proprietaire" value="120K/200K" />
                  <label htmlFor="proprietaire">120K à 200K</label>
                </div>
                <div className="form-options">
                  <input type="radio" id="proprietaire" value="+200K" />
                  <label htmlFor="proprietaire">+200K</label>
                </div>
              </div>

              <div className="form-options-icon">
                <input type="radio" id="proprietaire" value="question" />
                <label htmlFor="proprietaire">
                  <img
                    className="form-icon"
                    src={iconQuestion}
                    alt="icon Question"
                  />
                  Je ne sais pas
                </label>
              </div>

              <div className="form-btn">
                <Link to="/etape3">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape5">
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
      <aside className="asideEtape4">
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

export default Etape4;
