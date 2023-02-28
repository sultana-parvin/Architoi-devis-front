import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// import style scss
import "./Etape5.scss";

// import icon svg
import arrow from "../../assets/images/arrow/arrow.svg";
import arrow2 from "../../assets/images/arrow/arrow2.svg";
import surface from "../../assets/images/icons/surface.svg";

function Etape5() {
  const [data, setData] = useState(10);

  function handleRange(e) {
    setData(e.target.value);
  }
  const now = 50;

  return (
    <div className="content">
      <section className="etape5">
        <div className="etape5-container">
          <h2 className="etape5-container--title">
            <span className="etape5-container--span">5.</span>Surface à rénover
          </h2>
          <hr />
          <p className="etape5-container--paragraph">Surface à rénover en m²</p>
          <form className="form" action="">
            <div className="form-container">
              <div className="form-options">
                <label htmlFor="show">
                  <img
                    className="form-icon"
                    src={surface}
                    alt="icon renovation complete"
                  />
                  <input
                    type="text"
                    id="show"
                    name="show"
                    required
                    value={`${data} m²`}
                    readOnly
                  />
                </label>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span className="span">10m²</span>
                    </td>
                    <td>
                      <div id="range-wrap">
                        <input
                          type="range"
                          min="10"
                          max="255"
                          step="15"
                          value={data}
                          onChange={handleRange}
                        />
                        <output></output>
                      </div>
                    </td>
                    <td>
                      <span className="span">250m²</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="form-btn">
                <Link to="/etape4">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>
                <Link to="/etape6">
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
      <aside className="asideEtape5">
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

export default Etape5;
