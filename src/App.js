import { Route, Routes } from "react-router-dom";
import Landing from "./components/Lading/Landing";
import NavbarBoots from "./components/Navbar/NavbarBoots";
import Newbie from "./components/Newbie/Newbie";
import OrdenSummaryComponent from "./components/Newbie/proyectos/OrdenSummaryComponent";
import ProductPreviewCardComponent from "./components/Newbie/proyectos/Product-preview-card-component";

function App() {
  return (
    <>
      <NavbarBoots />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/newbie" element={<Newbie />} />
        <Route
          path="/newbie/challenge1"
          element={<ProductPreviewCardComponent />}
        />
        <Route path="/newbie/challenge2" element={<OrdenSummaryComponent />} />
      </Routes>
    </>
  );
}

export default App;
