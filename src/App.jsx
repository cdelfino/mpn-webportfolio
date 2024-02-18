import Header from "./components/layout/Header/Header";
import Hero from "./components/pages/Hero/Hero";
import MailIcon from "./components/layout/MailIcon";
import SobreMi from "./components/pages/SobreMi/SobreMi";
import Marquee from "react-fast-marquee";
import Marquee1 from "./components/common/Marquee/Marquee1";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <MailIcon />
      <SobreMi />
      <Marquee autoFill='true'>
        <Marquee1/>
      </Marquee>
    </div>
  );
}

export default App;
