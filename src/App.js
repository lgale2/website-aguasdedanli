import logo from './logo.svg';
import './App.css';

import {NavBar} from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './componentes/Banner';
import {Historia} from './componentes/Historia';
import {Afiliacion} from './componentes/Afiliacion';
import {Footer} from './componentes/Footer';
import {Contactenos} from './componentes/Contactenos';
import {Aviso} from './componentes/Aviso';



function App() {
 

  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Historia/>
     <Afiliacion/>
     <Aviso/>
     <Contactenos/>
     <Footer/>
    
    </div>
  );
}

export default App;
