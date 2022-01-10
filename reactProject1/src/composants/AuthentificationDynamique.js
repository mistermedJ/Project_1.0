/*
/src/AuthentificationDynamique.js
fr.reactjs.org/docs/faq-state.html
*/
import React from "react";

class AuthentificationDynamique extends React.Component {

    constructor(props) {
        super(props);
        // Initialisation du state des zones de saisie et d'affichage
        this.state = {
            pseudo: this.props.pseudo,
            mdp: this.props.mdp,
            message: this.props.message,
        };
        console.log("Constructor")
        console.log(this.state.pseudo)
        console.log(this.state.mdp)
        console.log(this.state.message)
    } /// constructor

    changePseudo(event) {
        // VERY IMPORTANT
        this.setState({ pseudo: event.target.value }); // state de l'enfant
        console.log(this.state.pseudo)
    } /// changePseudo

    changeMDP(event) {
        // VERY IMPORTANT
        this.setState({ mdp: event.target.value }); // state de l'enfant
        console.log(this.state.mdp)
    } /// changeMDP

    /**
 *
 * @param {type} texte
 * @returns {undefined}
 */
    validate() {

        console.log("validate")
        this.setState({ message: this.state.pseudo + "/" + this.state.mdp });
        console.log(this.state.pseudo)
        console.log(this.state.mdp)
        console.log(this.state.message)
    } /// validate

    render() {
        return (
            <div id="divForm">
                <h2 className="App-h2">Authentification</h2>
                <p>
                    <input id="pseudo" placeholder="Votre pseudo ?" onChange={this.changePseudo.bind(this)} />
                </p>
                <p>
                    <input type="text" id="mdp" placeholder="Votre mot de passe ?" onChange={this.changeMDP.bind(this)} />
                </p>
                <p>
                    <button type="button" onClick={this.validate.bind(this)}>Valider</button>
                </p>
                <label id="message">{this.state.message}</label>
            </div>
        )
    } /// render
} /// AuthentificationDynamique

export default AuthentificationDynamique;

