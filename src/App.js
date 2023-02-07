import React, { useEffect } from 'react';

/* import Footer from './Components/Footer'; */
import Header from './Components/Header';
import Banner from './Components/Banner';
import Avisos from './Components/Avisos';
import Passos from './Components/Passos';
import Documentos from './Components/Documentos';
import ForadoPrazo from './Components/ForadoPrazo';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = (props) => {

  useEffect(() => {
    document.title = "Rematrícula UNEX 2023.1"
  }, [])
  return (
    <div className="App">
      <Header />
      <Banner />
      <Avisos />
      <Passos />
      <Documentos />
      {/* <ForadoPrazo /> */}
      <Footer />
    </div>
  );

}

export default App;