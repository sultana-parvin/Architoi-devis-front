import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Etape1 from "../Etape1/Etape1";
import Etape2 from "../Etape2/Etape2";
import Etape3 from "../Etape3/Etape3";
import Etape4 from "../Etape4/Etape4";
import Etape5 from "../Etape5/Etape5";
import Etape6 from "../Etape6/Etape6";
import Etape7 from "../Etape7/Etape7";
import Etape8 from "../Etape8/Etape8";
import Etape9 from "../Etape9/Etape9";
import Etape10 from "../Etape10/Etape10";
import Etape11 from "../Etape11/Etape11";

// import file SCSS
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Etape1 />} />
        <Route path="/etape2" element={<Etape2 />} />
        <Route path="/etape3" element={<Etape3 />} />
        <Route path="/etape4" element={<Etape4 />} />
        <Route path="/etape5" element={<Etape5 />} />
        <Route path="/etape6" element={<Etape6 />} />
        <Route path="/etape7" element={<Etape7 />} />
        <Route path="/etape8" element={<Etape8 />} />
        <Route path="/etape9" element={<Etape9 />} />
        <Route path="/etape10" element={<Etape10 />} />
        <Route path="/etape11" element={<Etape11 />} />
      </Routes>
    </div>
  );
}

export default App;
