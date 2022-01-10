/*
/src/AuthentificationDB.js
fr.reactjs.org/docs/faq-state.html
*/
import React from "react"

class AuthentificationDb extends React.Component {

    constructor(props) {
        super(props)
        // Initialisation du state des zones de saisie et d'affichage
        this.state = {
            pseudo: this.props.pseudo,
            mdp: this.props.mdp,
            message: this.props.message,
        }
        // console.log("Constructor")
        // console.log(this.state.pseudo)
        // console.log(this.state.mdp)
        // console.log(this.state.message)
        // this.handleChange = this.handleChange.bind(this)
        this.changePseudo = this.changePseudo.bind(this)
        this.changeMDP = this.changeMDP.bind(this)
        this.validate = this.validate.bind(this)
    } /// constructor

    // handleChange(event) {
    //     const name = event.target.name
    //     this.setState({
    //         /// Pour faire du générique
    //         [name]: event.target.value
    //     })
    // }

    changePseudo(event) {
        this.setState({ pseudo: event.target.value }) // state de l'enfant
        // console.log(this.state.pseudo)
    } /// changePseudo

    changeMDP(event) {
        this.setState({ mdp: event.target.value }) // state de l'enfant
        // console.log(this.state.mdp)
    } /// changeMDP

    /**
 *
 * @param {type} texte
 * @returns {undefined}
 */
    validate() {
        // console.log("validate")
        this.setState({ message: this.state.pseudo + "/" + this.state.mdp })
        fetch("http://localhost:8083/authentification?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp)
            //fetch("http://pascalbuguet.alwaysdata.net/reactPHP/php/AuthentificationGET.php?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp)
            //fetch("http://localhost/ReactPHP/php/AuthentificationGET.php?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp)
            .then(response => {
                // console.log("RESPONSE")
                // console.log(response)
                return response.json()
            })
            .then(result => {
                // console.log("RESULT")
                // // Objet JSON
                // console.log(result)
                this.setState({ message: result })
            },
                error => {
                    // console.log("ERROR")
                    // console.log(error)
                    this.setState({ message: error.message })
                }
            )

    } /// validate

    render() {
        return (
            <div id="divForm">
                <h2 className="App-h2">Authentification DB</h2>
                <p>
                    <input type="text" id="pseudo" value={this.state.pseudo} placeholder="Votre pseudo ?" onChange={this.changePseudo} />
                </p>
                <p>
                    <input type="password" id="mdp" value={this.state.mdp} placeholder="Votre mot de passe ?" onChange={this.changeMDP} />
                </p>
                <p>
                    <button type="button" onClick={this.validate}>Valider</button>
                </p>
                <label id="message">{this.state.message}</label>
            </div>
        )
    } /// render
} /// AuthentificationDB

export default AuthentificationDb
