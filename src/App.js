import { Route, Routes } from "react-router-dom";
import Advanced from "./components/Advanced/Advanced";
import Guru from "./components/Guru/Guru";
import Intermediate from "./components/Intermediate/Intermediate";
import Junior from "./components/Junior/Junior";
import TipCalculatorApp from "./components/Junior/projects/TipCalculatorApp";
import Landing from "./components/Lading/Landing";
import NavbarBoots from "./components/Navbar/NavbarBoots";
import Newbie from "./components/Newbie/Newbie";
import InteractiveRatingComponent from "./components/Newbie/projects/InteractiveRatingComponent";
import OrdenSummaryComponent from "./components/Newbie/projects/OrdenSummaryComponent";
import ProductPreviewCardComponent from "./components/Newbie/projects/Product-preview-card-component";
import About from "./components/About/About";
import AdviceGeneratorApp from "./components/Junior/projects/AdviceGeneratorApp";

function App() {
  return (
    <>
      <NavbarBoots />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/newbie" element={<Newbie />} />
        <Route path="/junior" element={<Junior />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/advanced" element={<Advanced />} />
        <Route path="/guru" element={<Guru />} />
        <Route path="/about" element={<About />} />

        {/* Routes to newbies projects */}
        <Route
          path="/newbie/challenge1"
          element={<ProductPreviewCardComponent />}
        />
        <Route path="/newbie/challenge2" element={<OrdenSummaryComponent />} />
        <Route
          path="/newbie/challenge3"
          element={<InteractiveRatingComponent />}
        />
        {/* Routes to junior projects */}
        <Route path="/junior/challenge4" element={<TipCalculatorApp />} />
        <Route path="/junior/challenge5" element={<AdviceGeneratorApp />} />
      </Routes>
    </>
  );
}

export default App;
