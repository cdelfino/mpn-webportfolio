import Header from "./components/layout/Header/Header";
import Hero from "./components/pages/Hero/Hero";
import MailIcon from "./components/layout/MailIcon";
import SobreMi from "./components/pages/SobreMi/SobreMi";
import Marquee from "react-fast-marquee";
import Construimos from "./components/common/Marquees/Construimos";
import Hablamos from "./components/common/Marquees/Hablamos";
import { Proyectos } from "./components/pages/Proyectos/Proyectos";

function App() {
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default App;
