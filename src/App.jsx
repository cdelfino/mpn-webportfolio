import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Hero from "./components/pages/Hero/Hero";
import MailIcon from "./components/layout/MailIcon/MailIcon";
import SobreMi from "./components/pages/SobreMi/SobreMi";
import Marquee from "react-fast-marquee";
import Construimos from "./components/common/Marquees/Construimos";
import Hablamos from "./components/common/Marquees/Hablamos";
import Contacto from "./components/pages/Contacto/Contacto";
import Proyectos from "./components/pages/Proyectos/Proyectos";
import ProjectSync from "./components/pages/Proyectos/ProjectSync";
import ProjectSeeconds from "./components/pages/Proyectos/ProjectSeeconds";
import ProjectBacon from "./components/pages/Proyectos/ProjectBacon";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sync" element={<ProjectSync />} />
        <Route path="/seeconds" element={<ProjectSeeconds />} />
        <Route path="/bacon" element={<ProjectBacon />} />
      </Routes>
    </Layout>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <MailIcon />
      <SobreMi />
      <Marquee autoFill="true">
        <Construimos />
      </Marquee>
      <Proyectos />
      <Marquee autoFill="true">
        <Hablamos />
      </Marquee>
      <Contacto />
    </div>
  );
}
export default App;
