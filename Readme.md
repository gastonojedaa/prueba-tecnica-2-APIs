# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

##########################################################################

Se creó un proyecto vanilla con Vite y se instaló el plugin de react con

npm install @vitejs/plugin-react -E

luego en package.json, al no estar react hay que instalar dependencias

npm install react react-dom -E

Luego se crea la carpeta vite.config.js con este contenido

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
})

y en main.js cambiar a .jsx y poner esto

import {createRoot} from 'react-dom/client'

const root = createRoot(document.getElementById('app')) //es la app del index.html. Desde ahi quiero renderizar mi aplicacion
root.render(<h1>Hola</h1>)

luego instalar

npm install standard -D

y en package.json al final




