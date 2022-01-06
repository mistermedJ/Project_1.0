document.getElementById('email').onchange = inputMail
document.getElementById('password').onchange = inputPassword
document.getElementById('btValider').onclick = validate



//Expresion reguliere pour email
let gabarit = new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}");


function inputMail() {
    valeurEmail = email.value
    console.log(valeurEmail)

    if (valeurEmail == '') {


        var node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Saisissez un Email");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("lblMessage").appendChild(node);
    } else if (!gabarit.test(valeurEmail)) {

        var node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Saisissez un Email Correct");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("lblMessage").appendChild(node);
    }
}

function inputPassword() {
    valeurPassword = password.value
    console.log(valeurPassword)

    if (valeurPassword == '') {
        var node = document.createElement("p");                 // Create a <li> node
        var textnode = document.createTextNode("Saisissez un mdp");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("lblMessage").appendChild(node);     // Append <li> to <ul> with id="myList"

    }
}

function message() {
    let text = document.getElementById('lblMessage')
    if (text != "") {
        document.getElementById('lblMessage').innerHTML = ""
    }
}


function validate() {
    message()
    inputMail()
    inputPassword()



    fetch("http://localhost:8082/authentification?email=" + valeurEmail + "&password=" + valeurPassword)

        //fetch("http://pascalbuguet.alwaysdata.net/reactPHP/php/AuthentificationGET.php?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp)
        //fetch("http://localhost/ReactPHP/php/AuthentificationGET.php?pseudo=" + this.state.pseudo + "&mdp=" + this.state.mdp)
        .then(response => {
            // console.log("RESPONSE")
            // console.log(response)
            return response.json()
        })
        .then(result => {
            // console.log("RESULT")
            // // Objet JSONvar node = document.createElement("p"); 
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(result);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("lblMessage").appendChild(node);


        },
            error => {
                ({ message: error.message })
                // console.log("ERROR")
                // console.log(error)

            }
        )
        
}