/*
index.js
dans C:\pascal\supports\nodejs\NodeJsProjets\MySQLNodeAPIForReactRouter\
*/
// Avant : npm install mysql
const mysql = require('mysql')

// Avant : npm install express
const express = require('express')
const app = express()

//const http = require('http')
// Avant : npm install body-parse
//const bodyParser = require('body-parser')



/*
Accueil, s'il en est !!!
*/
app.get('/', (req,res) => {
    res.send("Accueil")
})


/*
AUTHENTIFICATION
*/
// http://localhost:8083/authentification?pseudo=p&mdp=b
app.get('/authentification', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Crée un objet de type Connection
    const connexion = mysql.createConnection({
      host     : 'localhost',
      port     : '3306',
      user     : 'root',
      password : '',
      database : 'cours'
    })

    // Connexion à la BD
    connexion.connect()

    const params = [req.query.pseudo, req.query.mdp]
    //const params = ['p', 'b']
    // Exécute une requête SQL de type SELECT
    connexion.query('SELECT * FROM utilisateurs WHERE pseudo=? AND mdp=?', params, (err,rows) => {
        // SI OK
        if (!err) {
            console.log(rows)
            let message = ""
            // s'il  renvoi une reponse
            if(rows.length == 1) {
                //console.log(rows[0])
                
                message = "OK vous êtes connecté(e)"
            } else {
                message = "KO vous n'êtes pas connecté(e)"
                console.log("")
            }
            console.log(message)
            res.status(200).json(message)
        }
        // Si KO
        else {
          console.log("\nErreur d'exécution de la requête !" + err)
          // A REVOIR
          res.status(200).json("\nErreur d'exécution de la requête SQL !" + err)
        }
    })

    // Déconnexion de la BD
    connexion.end() /// Déconnexion
})

// http://localhost:8083/paysInsertSQL?id_pays=...&nom_pays=...

// Vers du MySQL (Insert)
app.get('/paysInsertSQL', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'cours'
  })

  // Connexion à la BD
  connexion.connect()
  const params = [req.query.id_pays, req.query.nom_pays]
  // Exécute une requête SQL de type INSERT
  connexion.query('INSERT INTO pays(id_pays, nom_pays) VALUES(?,?)', params, (err, affected) => {
    // SI OK
    if (!err) {
      console.log(affected)
      res.status(200).json(affected)
    }
    // Si KO
    else {
      console.log(affected)
      console.log("\nErreur d'exécution de la requête !" + err)
      let array = []
      array.push("Erreur d'exécution de la requête !" + err)
      res.status(200).json(array)
    }
  })

  // Déconnexion de la BD
  connexion.end() /// Déconnexion

}) /// app.get('/villeInsertSQL',

// http://localhost:8083/PaysSQL
app.get('/paysSQL', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')


  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'cours'
  })

  // Connexion à la BD
  connexion.connect()
  // Exécute une requête SQL de type SELECT
  connexion.query('SELECT * FROM pays', (err, rows, fields) => {
    // SI OK
    if (!err) {
      console.log(rows)
      res.status(200).json(rows)
    }
    // Si KO
    else {
      console.log("\nErreur d'exécution de la requête !" + err)
      res.status(200).json("\nErreur d'exécution de la requête !" + err)
    }
  })
  // Déconnexion de la BD
  connexion.end() /// Déconnexion
})



// http://localhost:8083/utlisateurs?pseudo=...&mdp=...&email=..&qualite=..

// Vers du MySQL (Insert)
app.get('/Inscription', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'cours'
  })

  // Connexion à la BD
  connexion.connect()
  const params = [req.query.pseudo, req.query.mdp, req.query.email, req.query.qualite]
  // Exécute une requête SQL de type INSERT
  connexion.query('INSERT INTO utilisateurs(pseudo, mdp, email, qualite) VALUES(?,?,?,?)', params, (err, affected) => {
    // SI OK
    if (!err) {
      console.log(affected)
      res.status(200).json(affected)
    }
    // Si KO
    else {
      console.log(affected)
      console.log("\nErreur d'exécution de la requête !" + err)
      let array = []
      array.push("Erreur d'exécution de la requête !" + err)
      res.status(200).json(array)
    }
  })

  // Déconnexion de la BD
  connexion.end() /// Déconnexion

}) /// app.get('/villeInsertSQL',







/*
MAIN
*/
app.listen(8083, () => {
  console.log("Serveur à l'écoute http://localhost:8083")
})