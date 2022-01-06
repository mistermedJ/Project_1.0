document.getElementById('identity').onchange = showIdentity;
document.getElementById('demand').onchange = showDemande;
document.getElementById('lastName').onchange = showName;
document.getElementById('firstName').onchange = showFirstName;
document.getElementById('email').onchange = showEmail;
document.getElementById('messageform').onchange = showMessage;
document.getElementById('validForm').onclick = validation;


//Expresion reguliere pour email
let gabarit = new RegExp("[A-z0-9._-]+[@]{1}[A-z0-9._-]+[.]{1}[A-z]{2,10}");
let prenomExp = new RegExp("^[a-zA-Z]+$")

function showIdentity () {
    valeurIdentity = identity.value
    console.log("Vous êtes : " + valeurIdentity)
}

function showDemande () {
    valeurDemand = demand.value
    console.log("Le souhait : " + valeurDemand)
}

function showName () {
    valeurName = lastName.value
    //console.log("Votre nom : " + valeurName)

    if (valeurName == '') {
        var node = document.createElement("p");                 // Cree a <p> node
        var textnode = document.createTextNode("Saisissez un nom");         // Cree  un text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errorname").appendChild(node);
    } else if (!prenomExp.test(valeurName)) {
        let node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Le nom n'est pas correct");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errorname").appendChild(node);
    } 
}

function showFirstName () {
    valeurFirstName = firstName.value
    console.log("Votre prénom : " + valeurFirstName)

    if (valeurFirstName == '') {
        var node = document.createElement("p");                 // Cree a <p> node
        var textnode = document.createTextNode("Saisissez un Prenom");         // Cree  un text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errorlastname").appendChild(node);
    } else if (!prenomExp.test(valeurFirstName)) {
        let node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Prenom n'est pas correct");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errorlastname").appendChild(node);
    } else {
        Message()
    }
}

function showEmail () {
    valeurEmail = email.value
    console.log("Votre email : " + valeurEmail)

      
    if (valeurEmail == '') {


        var node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Saisissez un Email");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errormail").appendChild(node);
    } else if (!gabarit.test(valeurEmail)) {

        var node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Saisissez un Email Correct");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("erroremail").appendChild(node);
    } 
}

function showMessage () {
    valeurMessage = messageform.value
    console.log("Votre Message : " + valeurMessage)

    if (valeurMessage == '') {


        var node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Saisissez un Message");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errormess").appendChild(node);
    } 
}

function Message() {
    let a = document.getElementById('errormail')
    let b = document.getElementById('errorlastname')
    let c = document.getElementById('errorname')
    let d = document.getElementById('errormess')

    if ( a || b || c || d != "") {
        document.getElementById('errormail').innerHTML = "",
        document.getElementById('errorlastname').innerHTML = "",
        document.getElementById('errorname').innerHTML = "",
        document.getElementById('errormess').innerHTML = ""

    }
}

function validation(event){
    event.preventDefault()
    Message()
    showIdentity()
    showDemande()
    showName()
    showFirstName()
    showEmail()
    showMessage()
    
}