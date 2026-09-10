import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import UeberMich from './components/UeberMich.jsx';
import Leistungen from './components/Leistungen.jsx';
import Systeme from './components/Systeme.jsx';
import Zusammenarbeit from './components/Zusammenarbeit.jsx';
import Kontakt from './components/Kontakt.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <UeberMich />
      <Leistungen />
      <Systeme />
      <Zusammenarbeit />
      <Kontakt />
      <Footer />
    </>
  );
}
