import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ProjectTemplate from "./data/portfolios/ProjectTemplate";
import Maintenance from "./pages/Maintenance";
import SnapToStardom from "./pages/SnapToStardom";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Maintenance />} />
            <Route path="/portfolio/:id" element={<ProjectTemplate />} />
            <Route path="/event/snaptostardom" element={<SnapToStardom />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
