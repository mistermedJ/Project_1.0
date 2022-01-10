/*
App.js => AppV1.js
*/
import React from "react";
import './css/perso.css';
import Home from "./Home.js";
import About from "./About.js";
import AuthentificationDB from "./composants/AuthentificationDB";
import PaysInsertDynamique from "./composants/PaysInsertDynamique.js";
import PaysSelect from "./composants/PaysSelect.js";
import Inscription from "./composants/Inscription.js"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App-nav">
        <nav>
          <ul  className="App-ul-nav">
            <li className="App-li-nav">
              <Link to="/">Accueil</Link>
            </li>            
            <li className="App-li-nav">
              <Link to="/AuthentificationDB">Connexion</Link>
            </li>
            <li className="App-li-nav">
              <Link to="/PaysInsertDynamique">Nouveau Pays</Link>
            </li>
            <li className="App-li-nav">
              <Link to="/PaysSelect">Les Pays</Link>
            </li>
            <li className="App-li-nav">
              <Link to="/Inscription">Inscription</Link>
            </li>
            <li className="App-li-nav">
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/about">
            <About />
          </Route>
                 
          <Route path="/AuthentificationDB">
            <AuthentificationDB />
          </Route>

          <Route path="/PaysSelect">
            <PaysSelect />
          </Route>

          <Route path="/PaysInsertDynamique">
            <PaysInsertDynamique />
          </Route>
          <Route path="/Inscription">
            <Inscription />
          </Route>

            {/* possibilité de rajouter export afin de placer la route home ou je veux */}
          <Route path="/"> 
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

/*
** Cette fonction on l'externalise vers home.JS puis on la remplace 
**  la fonction par une Classe
function Home() {
  return <h2>Home</h2>;
}*/





