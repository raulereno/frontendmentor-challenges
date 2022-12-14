import { Route, Routes } from "react-router-dom";
import Landing from "./components/Lading/Landing";
import NavbarBoots from "./components/Navbar/NavbarBoots";
import Newbie from "./components/Newbie/Newbie";
import ProductPreviewCardComponent from "./components/Newbie/proyectos/Product-preview-card-component";

function App() {
  return (
    <>
      <NavbarBoots />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/newbie" element={<Newbie />} />
        <Route
          exact
          path="/newbie/challenge1"
          element={<ProductPreviewCardComponent />}
        />
      </Routes>
    </>
  );
}

export default App;
