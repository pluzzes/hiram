import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About/About';
import SEO from '../pages/SEO';
import Services from '../pages/Services';
import Layout from './Layout';
import Imoveis from '../pages/Imoveis';
import PHP from '../pages/PHP';
import Estabelecimentos from '../pages/Estabelecimentos';
import AboutWho from '../pages/About/AboutWho';
import OurValues from '../pages/About/OurValues';
import Reseach from '../pages/Research';
import Authentication from '../pages/Authentication';
import BI from '../pages/BI';

import useAuth from '../hook/useAuth'

const PrivateRoute = ({Item}) =>{
  const {signed} = useAuth();
  return signed > 0 ? <Item /> : <Authentication/>;
};

const App = () => {
  return (
    <>
      <Routes>
            <Route exact path="/" element={<Authentication />} />
            <Route path="/" element={<PrivateRoute Item={Layout} />}>
              <Route path='home' element={<PrivateRoute Item={Home} />} />
              <Route path="about" element={<PrivateRoute Item={About} />} />
              <Route path="services" element={< PrivateRoute Item={Services} />} />
              <Route path="researches" element={<PrivateRoute Item={Reseach} />} />
              <Route path="researches/bi" element={<PrivateRoute Item={BI} />} />
              <Route path="researches/imoveis" element={<PrivateRoute Item={Imoveis} />} />
              <Route path="researches/estabelecimentos" element={<PrivateRoute Item={Estabelecimentos} />} />
              <Route path="seo" element={<PrivateRoute Item={SEO} />} />
              <Route path="php" element={<PrivateRoute Item={PHP} />} />
              <Route path="who-we-are" element={<PrivateRoute Item={AboutWho} />} />
              <Route path="our-values" element={<PrivateRoute Item={OurValues} />} />
              {/* <Route path="*" element={<p>Not found!</p>} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
