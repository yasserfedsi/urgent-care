import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Screens from "./components/screens";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Screens />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
