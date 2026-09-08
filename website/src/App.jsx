import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Branchen from './components/Branchen.jsx';
import Leistungen from './components/Leistungen.jsx';
import Portfolio from './components/Portfolio.jsx';
import UeberMich from './components/UeberMich.jsx';
import Prozess from './components/Prozess.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Kontakt from './components/Kontakt.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Branchen />
      <Leistungen />
      <Portfolio />
      <UeberMich />
      <Prozess />
      <Testimonials />
      <Faq />
      <Kontakt />
      <Footer />
    </>
  );
}
