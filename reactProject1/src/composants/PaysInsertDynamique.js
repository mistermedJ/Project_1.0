/*
/src/AuthentificationDynamique.js
fr.reactjs.org/docs/faq-state.html
*/
import React from "react";

class PaysInsertDynamique extends React.Component {

    constructor(props) {
        super(props);
         // Initialisation du state des zones de saisie et d'affichage
        this.state = {
            cp: this.props.cp,
            pays: this.props.pays,
            message: this.props.message,
        };
        console.log("Constructor")
        console.log(this.state.cp)
        console.log(this.state.pays)
        console.log(this.state.message)
        //this.changePays=this.changePays.bind(this)
        //this.validate=this.validate.bind(this)

    } /// constructor

    changeIdPays(event) {
        // gestion de saisie dans l'input type text id_pays et affectation à la variable d'état
        this.setState({ cp: event.target.value }); // state de l'enfant
        console.log(this.state.cp)
    } /// changeIdPays

    changePays(event) {
        // gestion de saisie dans l'input type text id_pays et affectation à la variable d'état
        this.setState({ pays: event.target.value }); // state de l'enfant
        console.log(this.state.pays)
    } /// changePays

    /**
 *
 * @param {type} texte
 * @returns {undefined}
 */
    validate() {
        // solicité lors du clic du bouton 
        console.log("validate")
        this.setState({ message: this.state.cp + "/" + this.state.pays });
        console.log(this.state.cp)
        console.log(this.state.pays)
        console.log(this.state.message)
        
             //http://localhost:8083/paysInsertSQL?" + "id_pays=" + this.state.cp +"&nom_pays="+ this.state.pays  
    
            // requete http
            // sur le serveur d'application
            // fetch("http://localhost:8083/paysInsertSQL?cp=" + document.getElementById("cp").value)
            fetch("http://localhost:8083/paysInsertSQL?" + "id_pays=" + this.state.cp +"&nom_pays="+ this.state.pays)
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
                        result = "Insertion réussie !"
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
                <h2 className="App-h2">Nouveau Pays</h2>
                <p>
                    <input id="cp" placeholder="ID PAYS ?" onChange={this.changeIdPays.bind(this)} />
                </p>
                <p>
                    <input type="text" id="pays" placeholder="Votre pays ?" onChange={this.changePays.bind(this)} />
                </p>
                <p>
                    <button type="button" onClick={this.validate.bind(this)}>Valider</button>
                </p>
                <label id="message">{this.state.message}</label>
            </div>
        )
    } /// render
} /// AuthentificationDynamique

export default PaysInsertDynamique;