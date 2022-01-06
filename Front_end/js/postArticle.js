const selectCat = document.getElementById('postArt')
const selectArt = document.getElementById('delArt')
document.getElementById('delArt').onchange = valueArt
document.getElementById('postArt').onchange = valueCat
document.getElementById('titlePostArt').onchange = titleValue
document.getElementById('description').onchange = describValue
document.getElementById('avatar').onchange = imageValue
document.getElementById('pricePostArt').onchange = priceValue
document.getElementById('ValidPost').onclick = validate
document.getElementById('ValidDelete').onclick = deleteArticle


/**********************Fonction qui permet de faire apparaitre BD categorie*********/
function categorySelect() {

    fetch("http://localhost:8082/showCategories").then((response) => {

        console.log(response);
        return response.json();
    }).then((data) => {

        // Tableau ordinal d’objets JSON
        console.log(data);

        for (i = 0; i < data.length; i++) {
            let option = document.createElement("option")
            option.value = i
            option.text = data[i].name_categorie
            postArt.appendChild(option)
        }

    },

        (error) => {
            console.log(error);
        }
    )
}

categorySelect()

//**************************************Fonction pour déterminer les valeurs et les conditions de saisie****/

function valueCat() {
    valueCategorie = postArt.value
    console.log(valueCategorie)

    if (valueCategorie == "") {
        alert("selectionner une categorie")
    }
}

function titleValue() {
    valueTitle = titlePostArt.value
    console.log(valueTitle)
}

function describValue() {
    valueDescrib = description.value
    console.log(valueDescrib)
}

function imageValue() {
    valueImage = avatar.value
    console.log(valueImage)

}

function priceValue() {
    valuePrice = pricePostArt.value
    console.log(valuePrice)

}

function validate() {
    valueCat()
    titleValue()
    describValue()
    imageValue()

    /**Si les conditions sont rempli j'ajoute a la BD article via route **/
    if (valueImage != "" && valueDescrib != "" && valueTitle != "" && valueCategorie != "" && valuePrice != "") {
        fetch("http://localhost:8082/articleInsert?" + "title=" + valueTitle + "&content=" + valueDescrib + "&id_category=" + valueCategorie + "&amount=" + valuePrice)
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

            },
                (error) => {
                    // Erreur HTTP
                    console.log(error)
                }
            )
    } else {
        var node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Remplissez les champs");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errorId").appendChild(node);
    }
} /// validate



/**********************Fonction qui permet de faire apparaitre BD article*********/
function articleSelect() {

    fetch("http://localhost:8082/showArticles").then((response) => {

        console.log(response);
        return response.json();
    }).then((data) => {

        // Tableau ordinal d’objets JSON
        console.log(data);

        for (i = 0; i < data.length; i++) {
            let option = document.createElement("option")
            option.value = data[i].id_articles
            option.text = data[i].title + " " + data[i].amount + " euros" + " publié le " + data[i].created_at
            delArt.appendChild(option)

        }

    },

        (error) => {
            console.log(error);
        }
    )
} /** articleSelect */


function valueArt() {
    valueArticle = selectArt.value
    console.log(valueArticle)
}

function deleteArticle() {

    valueArt()
    /**Si les conditions sont rempli j'ajoute a la BD article via route **/
    if (valueArticle != "") {
        fetch("http://localhost:8082/articleDelete?" + "id_articles=" + valueArticle)
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
                    result = "Suppresion réussie !"
                } else {
                    result = result[0]
                }
                console.log("resultText")
                console.log(result)

            },
                (error) => {
                    // Erreur HTTP
                    console.log(error)
                }
            )
    } else {
        var node = document.createElement("p");                 // Create a <p> node
        var textnode = document.createTextNode("Choisissez une catégorie");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <p>
        document.getElementById("errorDel").appendChild(node);
    }

} /// validate



articleSelect()