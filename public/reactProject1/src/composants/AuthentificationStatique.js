/*
/src/AuthentificationStatique.js
*/
import React from "react";

class AuthentificationStatique extends React.Component {

    render() {
        return (
            
            <div id="divForm">
                <form>
                    <h2 className="App-h2">Authentification Statique</h2>
                    <p>
                        <input id="pseudo" name="pseudo" placeholder="Votre peudo ?" />
                    </p>
                    <p>
                        <input type="password" id="mdp" name="mdp" placeholder="Votre mot de passe ?"/>
                    </p>
                    <p>
                        <input type="submit" id="btSubmit" name="btSubmit" value="Valider" />
                    </p>
                </form>
                <label id="message">{this.message}</label>
            </div>
            
        ) /// return
    } /// render
} /// AuthentificationStatique


/*
FUNCTIONS
*/

export default AuthentificationStatique;
