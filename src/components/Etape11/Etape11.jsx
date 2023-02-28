import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

// import style scss
import "./Etape11.scss";

// import icon svg
import arrow2 from "../../assets/images/arrow/arrow2.svg";

function Etape11() {
  const [value, setValue] = useState();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  // progress bar component
  const now = 100;

  return (
    <div className="content">
      <section className="etape11">
        <div className="etape11-container">
          <h2 className="etape11-container--title">
            Vous avez complété le questionnaire
          </h2>
          <p className="etape11-container--paragraph">
            Renseignez ces informations et recevez votre estimation
          </p>
          <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container">
              <div className="form-container--box">
                <div className="form-options">
                  <input
                    {...register("firstname", { required: true })}
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="Prénom"
                    required
                  />
                  <label htmlFor="firstname"></label>
                </div>
                <div className="form-options">
                  <input
                    {...register("lastname", { required: true })}
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Nom"
                  />
                  <label htmlFor="lastname"></label>
                </div>
              </div>

              <div className="form-options">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Address email"
                />
                <label htmlFor="email"></label>
              </div>
              <div className="form-options-phone">
                <PhoneInput
                  {...register("phone", { required: true })}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Numero de téléphone"
                  value={value}
                  onChange={setValue}
                  defaultCountry="FR"
                  international="true"
                />
                <label htmlFor="phone"></label>
              </div>
              <div className="form-options">
                <input
                  {...register("address", { required: true })}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address de chantier"
                />
                <label htmlFor="address"></label>
              </div>

              <div className="form-btn">
                <Link to="/etape10">
                  <button className="form-btn--style">
                    <img src={arrow2} alt="arrow image" />
                    Retour
                  </button>
                </Link>

                <button
                  type="submit"
                  className="form-btn--style2"
                  onClick={handleSubmit}
                >
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <aside className="asideEtape11">
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

export default Etape11;
