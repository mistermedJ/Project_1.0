/*
/src/AuthentificationDB.js
fr.reactjs.org/docs/faq-state.html
*/
import React from "react"

class Inscription extends React.Component {

    constructor(props) {
        super(props)
        // Initialisation du state des zones de saisie et d'affichage
        this.state = {
            pseudo: this.props.pseudo,
            mdp: this.props.mdp,
            email : this.props.email,
            qualite : this.props.qualite,
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
        this.changeEmail = this.changeEmail.bind(this)
        this.changeQualite = this.changeQualite.bind(this)
      

    } /// constructor

    // handleChange(event) {
    //     const name = event.target.name
    //     this.setState({
    //         /// Pour faire du générique
    //         [name]: event.target.value
    //     })
    // }
    changeQualite(event) {
        this.setState({ qualite: event.target.value }) // state de l'enfant
        // console.log(this.state.pseudo)
    } /// changeQualite

    changeEmail(event) {
        this.setState({ email: event.target.value }) // state de l'enfant
        // console.log(this.state.Email)
    } /// changeEmail

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
        fetch("http://localhost:8083/Inscription?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp +"&email=" + this.state.email + "&qualite=" + this.state.qualite)
            //fetch("http://pascalbuguet.alwaysdata.net/reactPHP/php/AuthentificationGET.php?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp)
            //fetch("http://localhost/ReactPHP/php/AuthentificationGET.php?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp)
            .then(response => {
                console.log("RESPONSE")
                console.log(response)
                return response.json()
            })
            .then((result) => {
                console.log("RESULT")
                // Tableau ordinal contenant 0 ou 1 objet JSON
                console.log(result)
                if (result.affectedRows === 1) {
                    result = "Inscription réussie !"
                } else {
                    result = result[0]
                }
                console.log("resultText")
                console.log(result)
                this.setState({ message: result })
            },
                (error) => {
                    // Erreur HTTP
                    console.log(error)
                }
            )
    
} /// validate
    render() {
        return (
            <div id="divForm">
                <h2 className="App-h2">Inscription</h2>
                <p>
                    <input type="text" id="pseudo" placeholder="Votre pseudo ?" onChange={this.changePseudo} />
                </p>
                <p>
                    <input type="password" id="mdp" placeholder="Votre mot de passe ?" onChange={this.changeMDP} />
                </p>
                <p>
                    <input type="text" id="email" placeholder="Votre email ?" onChange={this.changeEmail} />
                </p>
                <p>
                    <input type="text" id="qualite" placeholder="Votre qualité ?" onChange={this.changeQualite} />
                </p>
                <p>
                    <button type="button" onClick={this.validate.bind(this)}>Valider</button>
                </p>
                <label id="message">{this.state.message}</label>
            </div>
        )
    } /// render
} /// AuthentificationDB

export default Inscription
