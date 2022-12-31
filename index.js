const express = require('express');

const app = express();

app.get('/generator', (req, res) => {
  // Definimos la longitud de la contraseña a 8 caracteres
  const passwordLength = 23;

  // Creamos una lista de caracteres que se utilizarán para generar la contraseña
  const characterList =
    'abc8524a334qghvbcvdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  // Generamos la contraseña de manera aleatoria
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += characterList[Math.floor(Math.random() * characterList.length)];
  }

  // Mostramos la contraseña generada en la pantalla
  res.send(`La contraseña generada es: ${password}`);
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {});
