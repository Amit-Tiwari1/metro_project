import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AllStations from "./Pages/AllStations";
import Track from "./components/Dynamic/Routes/Routes";
import Timing from "./components/Static/Timings/Timing";
import Blog from "./components/Static/Blog/Blog";
import MoreOptipn from "./components/Static/More/MoreOptipn";
import Disclaimer from "./components/Static/More/Disclaimer";
import ComingSoon from "./components/Static/ComingSoon/ComingSoon";
import Details from "./components/Dynamic/Details/Details";
import About from "./components/Static/More/About";
import Lucknow from "./Pages/Lucknow";
import Privacy from "./components/Static/More/Privacy";
import DevelopedBy from "./components/Static/More/DevelopedBy";
import MetroRouteFinder from "./test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="google_translate_element"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/lucknow" element={<Lucknow />} /> */}
          <Route path="/metroStation/:id/" element={<AllStations />} />
          <Route
            path="/metroStation/:id/from-:from/to-:to"
            element={<AllStations />}
          />
          <Route path="/routes/:id" element={<Track />} />
          <Route path="/Blog/:id" element={<Blog />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/more/:id" element={<MoreOptipn />} />
          <Route path="/timing/:id" element={<Timing />} />
          <Route path="/disclaimer/:id" element={<Disclaimer />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/privacy/:id" element={<Privacy />} />
          <Route path="/developedBy/:id" element={<DevelopedBy />} />
          <Route path="/comingSoon" element={<ComingSoon />} />
          <Route path="/test" element={<MetroRouteFinder/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
