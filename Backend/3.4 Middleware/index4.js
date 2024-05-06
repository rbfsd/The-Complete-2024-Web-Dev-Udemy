import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const bandName = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send("<h1>Your band name is:</h1><h2>${bandName}</h2>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Ce code est une application web simple construite avec Node.js et Express. Elle utilise également le middleware `body-parser` pour analyser les données du corps des requêtes, notamment celles provenant d'un formulaire HTML. L'application génère un nom de groupe (band name) en combinant des éléments saisis par l'utilisateur à partir d'un formulaire et affiche le résultat.

// Voici une explication détaillée du code :

// 1. **Imports des modules :**
//    - `express`: Un framework web pour Node.js.
//    - `body-parser`: Un middleware pour Express qui permet de traiter le corps des requêtes.
//    - `dirname`, `fileURLToPath` : Ces fonctions sont utilisées pour obtenir le répertoire actuel du fichier en cours d'exécution.

// ```javascript
// import express from "express";
// import bodyParser from "body-parser";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
// ```

// 2. **Configuration du chemin du répertoire actuel :**
//    - `__dirname` est défini en utilisant les fonctions `dirname` et `fileURLToPath` pour obtenir le chemin du répertoire actuel du fichier en cours d'exécution.

// ```javascript
// const __dirname = dirname(fileURLToPath(import.meta.url));
// ```

// 3. **Initialisation de l'application Express :**
//    - Crée une instance d'Express et la stocke dans la variable `app`.
//    - Définit le numéro de port sur 3000.

// ```javascript
// const app = express();
// const port = 3000;
// ```

// 4. **Middleware pour analyser les données du formulaire :**
//    - Utilise le middleware `body-parser` pour analyser les données du formulaire avec `urlencoded({ extended: true })`.

// ```javascript
// app.use(bodyParser.urlencoded({ extended: true }));
// ```

// 5. **Fonction `bandNameGenerator` :**
//    - Cette fonction est utilisée comme middleware.
//    - Elle récupère les données du corps de la requête (les éléments du formulaire) et génère un nom de groupe en combinant les valeurs de "street" et "pet".
//    - Appelle `next()` pour passer au middleware suivant.

// ```javascript
// function bandNameGenerator(req, res, next) {
//   console.log(req.body);
//   bandName = req.body["street"] + req.body["pet"];
//   next();
// }

// app.use(bandNameGenerator);
// ```

// 6. **Gestion des routes :**
//    - Lorsque la route "/" est accédée via une méthode GET, renvoie le fichier HTML situé dans le répertoire "public".
//    - Lorsque la route "/submit" est accédée via une méthode POST (généralement depuis un formulaire), renvoie une réponse contenant le nom du groupe généré.

// ```javascript
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

// app.post("/submit", (req, res) => {
//   res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
// });
// ```

// 7. **Démarrage du serveur :**
//    - Le serveur Express écoute sur le port 3000.

// ```javascript
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
// ```

// En résumé, cette application crée un serveur web simple qui utilise Express, analyse les données du corps des requêtes pour générer un nom de groupe et renvoie une réponse avec ce nom lorsque l'utilisateur soumet un formulaire.
