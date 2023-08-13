import react from "react";
import { FaHome } from "react-icons/fa";
import NavBar from "./components/NavBar";
import Home from "./components/Home-page";
import Homecard from "./components/Home-card"
import Services from "./components/Services";
import About from "./components/About-us";
import Packages from "./components/packages"
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Contact from "./components/Contact-us";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;900&family=Paytone+One&display=swap');
</style>
function App() {
  return (
    <div className="App">
    
     <NavBar />
     <Home />
     <Homecard/>
     <Services />
     <About />
     <Gallery />
     <Packages />
     <Review />
     <Contact />
    </div>
  );
}


export default App;
