/*
index.js
*/
const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const app = express();




//**************************************************ROUTER TABLE USER**************************//
// http://localhost:8082/users
app.get('/users', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  
  
    // Crée un objet de type Connection
    const connexion = mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'emmaus_project'
    })
  
    // Connexion à la BD
    connexion.connect()

    
    // Exécute une requête SQL de type SELECT
    connexion.query('SELECT * FROM users',(err, rows) => {
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

// http://localhost:8082/authentification?email=&password=
app.get('/authentification', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  
  
    // Crée un objet de type Connection
    const connexion = mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'emmaus_project'
    })
  
    // Connexion à la BD
    connexion.connect()

    const params = [req.query.email, req.query.password]
    // Exécute une requête SQL de type SELECT
    connexion.query('SELECT * FROM users WHERE email=? AND password=?', params, (err, rows) => {
      // SI OK
      if (!err) {
            console.log(rows)
            let message = ""
            // s'il  renvoi une reponse
            if(rows.length == 1) {
                //console.log(rows[0])
                message = "Vous êtes connecté(e)"
               
            } else {
                message = "Identifiant/Password non valide"
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

  


//**************************************************ROUTER TABLE PRODUCT**************************//

// http://localhost:8082/showProduct
app.get('/showProduct', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  
  
    // Crée un objet de type Connection
    const connexion = mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'emmaus_project'
    })
  
    // Connexion à la BD
    connexion.connect()

    
    // Exécute une requête SQL de type SELECT
    connexion.query('SELECT * FROM products',(err, rows) => {
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


// http://localhost:8082/productInsert?name_product=CallOfDuty&price=10
// Vers du MySQL (Insert)
app.get('/productInsert', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  
    // Crée un objet de type Connection
    const connexion = mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'emmaus_project'
    })
  
    // Connexion à la BD
    connexion.connect()
    const params = [req.query.name_product, req.query.price]
    // Exécute une requête SQL de type INSERT
    connexion.query('INSERT INTO products(name_product, price) VALUES(?,?)', params, (err, affected) => {
      // SI OK
      if (!err) {
        console.log(affected)
        res.status(200).json(affected)
      }
      // Si KO
      else {
       
        console.log("\nErreur d'exécution de la requête !" + err)             
        res.status(200).json("\nErreur d'exécution de la requête !"+ err)
    
    }
    })
  
    // Déconnexion de la BD
    connexion.end() /// Déconnexion
  
  }) /// app.get('/usersInsertS',

  


// http://localhost:8082/productDelete?name_product=...&price=
// Vers du MySQL (Delete MODE GET)
app.get('/productDelete', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')



  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'emmaus_project'
  })



  // Connexion à la BD
  connexion.connect()
  const param = [req.query.name_product, req.query.price]
  // Exécute une requête SQL de type INSERT
  connexion.query('DELETE FROM products WHERE name_product = ? AND price = ?', param, (err, affected) => {
    //let array = []
    // SI OK
    if (!err) {
      console.log(affected.affectedRows)
      //array.push(affected)
      //res.status(200).json(affected)
      res.status(200).json(affected.affectedRows)
    }
    // Si KO
    else {
      console.log(affected)
      console.log("Erreur d'exécution de la requête !" + err)
      // A REVOIR
      //res.status(200).json("\nErreur d'exécution de la requête !" + err)
      //array.push("Erreur d'exécution de la requête !" + err)
      //res.status(200).json(array)
      let errorMsg = "Erreur d'exécution de la requête !" + err
      res.status(200).json(err)
    }
  })

  
  // Déconnexion de la BD
  connexion.end() /// Déconnexion

  
  //res.status(200).json(rows)
}) /// app.get('/productDelete',

/***********************************ROUTER TABLE ARTICLES PRESS************************ */


// http://localhost:8082/showArticles
app.get('/showArticles', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')


  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'emmaus_project'
  })

  // Connexion à la BD
  connexion.connect()

  
  // Exécute une requête SQL de type SELECT
  connexion.query('SELECT * FROM articles',(err, rows) => {
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




// http://localhost:8082/articleInsert?title=CallOfDuty&content=10&id_category=2&
// Vers du MySQL (Insert)
app.get('/articleInsert', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'emmaus_project'
  })

  // Connexion à la BD
  connexion.connect()
  const params = [req.query.title, req.query.content, req.query.id_category, req.query.amount]
  // Exécute une requête SQL de type INSERT
  connexion.query('INSERT INTO articles(title, content, id_category, amount) VALUES(?,?,?,?)', params, (err, affected) => {
    // SI OK
    if (!err) {
      console.log(affected)
      res.status(200).json(affected)
    }
    // Si KO
    else {
     
      console.log("\nErreur d'exécution de la requête !" + err)             
      res.status(200).json("\nErreur d'exécution de la requête !"+ err)
  
  }
  })

  // Déconnexion de la BD
  connexion.end() /// Déconnexion

}) /// 


// http://localhost:8082/articleDelete?id_articles=29
// Vers du MySQL (Delete MODE GET)
app.get('/articleDelete', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')



  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'emmaus_project'
  })



  // Connexion à la BD
  connexion.connect()
  const param = [req.query.id_articles]
  // Exécute une requête SQL de type INSERT
  connexion.query('DELETE FROM articles WHERE id_articles = ?', param, (err, affected) => {
    //let array = []
    // SI OK
    if (!err) {
      console.log(affected.affectedRows)
      //array.push(affected)
      //res.status(200).json(affected)
      res.status(200).json(affected.affectedRows)
    }
    // Si KO
    else {
      console.log(affected)
      console.log("Erreur d'exécution de la requête !" + err)
      // A REVOIR
      //res.status(200).json("\nErreur d'exécution de la requête !" + err)
      //array.push("Erreur d'exécution de la requête !" + err)
      //res.status(200).json(array)
      let errorMsg = "Erreur d'exécution de la requête !" + err
      res.status(200).json(err)
    }
  })

  
  // Déconnexion de la BD
  connexion.end() /// Déconnexion

  
  //res.status(200).json(rows)
}) /// app.get('/articleDelete',

//***********************************************ROUTER CATEGORY*********************** */

// http://localhost:8082/showCategories
app.get('/showCategories', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')


  // Crée un objet de type Connection
  const connexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'emmaus_project'
  })

  // Connexion à la BD
  connexion.connect()

  
  // Exécute une requête SQL de type SELECT
  connexion.query('SELECT * FROM categories',(err, rows) => {
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


// Servor
app.listen(8082, () => {
  console.log("Serveur à l'écoute sur le port 8082")
})