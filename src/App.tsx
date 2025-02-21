import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/header";
import Hero from "./components/hero";
import FirstYear from "./components/sections/first-year/page";
import SecondYear from "./components/sections/second-year/page";
import Footer from "./components/footer";
import FAQ from "./components/faq";
import Blog from "./blog/blog";
import Sponsor from "./components/sponsor";

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
              <FirstYear title="1st Year Drives" />
              <SecondYear title="2nd Year Drives" />
              <FAQ />
              <Sponsor />
              <Footer />
            </>
          }
        />
        {/* Add the blog route */}
        <Route
          path="/blog"
          element={
            <>
              <Blog />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
