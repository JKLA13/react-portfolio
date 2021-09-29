// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/shared/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/shared/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
