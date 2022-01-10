/*
/src/   PaysSelect.js
*/
import React from "react";

// CLASS ELEMENT dans option
class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = { element : props.element };
        } /// constructor
    render() {
        return <p>{this.state.element.nom_pays}</p>
    } /// render
} /// class

class PaysSelect extends React.Component {

// CONSTRUCTOR
constructor(props) {
    super(props);
    this.state = { elements : [] };
} /// constructor

// COMPONENTDIDMOUNT
componentDidMount() {
    // URL sur le serveur
    fetch("http://localhost:8083/PaysSQL").then((response) => {

        console.log(response);
        return response.json();
    }).then((result) => { 
        console.log("RESULT");
        // Tableau ordinal d’objets JSON
        console.log(result);
        this.setState({elements : result});
    },
    (error) => {
        console.log(error);
    }
    )
} /// componentDidMount


    render() {
        return (
            <div>
                <h2 className="App-h2">Les Pays</h2>
                {
                            this.state.elements.map((e, i) => {
                            return <Element key={i} element={e}></Element>
                        })
                    }
            </div>
            
            
        )
    }
} /// PaysSelect

export default PaysSelect;