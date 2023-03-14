# P6-Piquante
Projet n°6 - Piquante : Construisez une API sécurisée pour une application d'avis gastronomiques

Installation et mise en service du front et du back :

Backend :

- téléchargement du PROJET ici :

$ git clone https://github.com/AdnanElg/P6-Piquante.git  

après, avec le terminal dans le dossier racine du backend

$ npm install

après, création du fichier .env à la racine du répertoire et y mettre les valeurs correctes pour se connecter à une base de donnée mongodb :

PORT = 3000 (le front fonctionne bien avec le backend sur le port 3000)

DB_USERNAME="username de la base de donnée mongodb"

DB_PASSWORD="password de la base de donnée mongodb"

DB_CLUSTER = "cluster de la base de donnée mongodb"

CRYPTOJS_EMAIL = "XXXXX"

JWT_KEY_TOKEN = "XXXXX"

ou prendre le fichier .example.env, mettre les bonnes valeurs et modifier le nom du fichier en .env

et après

$ npm run start


Frontend :

$ cd frontend
$ npm i
$ npm start
