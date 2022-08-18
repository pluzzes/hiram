import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import SEO from '../routes/SEO';
import Services from '../routes/Services';
import Layout from './Layout';
import Imoveis from '../routes/Imoveis';
import PHP from '../routes/PHP';
import Estabelecimentos from '../routes/Estabelecimentos';
import AboutWho from '../routes/AboutWho';
import OurValues from '../routes/OurValues';
import Reseach from '../routes/Research';
import Authentication from '../routes/Authentication';
const App = () => {
  return (
    <>
      <Routes>
            <Route path="/sigin" element={<Authentication />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="researches" element={<Reseach />} />
              <Route path="researches/imoveis" element={<Imoveis />} />
              <Route path="researches/estabelecimentos" element={<Estabelecimentos />} />
              <Route path="seo" element={<SEO />} />
              <Route path="php" element={<PHP />} />
              <Route path="who-we-are" element={<AboutWho />} />
              <Route path="our-values" element={<OurValues />} />
              <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
