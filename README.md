# CentroPrestamos_Intento1
Prueba 1
-Crear una carpeta para el proyecto
-Ejecutar npm init--yes en la carpeta del proyecto
-Crear una carpeta backEnd(descargar la de github) para configurar el servidor
	-crear carpeta controller, models, routes dentro de backEnd
	-crear index.js y database.js

-Ejecutar npm install express morgan mysql express-myconnection fuera de la carpeta de backEnd, dentro del proyecto
-Ejecutar npm install nodemon -D, para no estar reiniciando el servidor a cada rato, la D es porque la dependencia no es escencial en el proyecto

crear un script "dev":"nodemon backEnd/index.js" para ejecutar el servidor nodejs con: npm run dev

-Abrir mysql shell
-ingresar credenciales
-crear base de datos y "otorgarle permisos" a nodejs.
-CREATE DATABASE centroprestamos_dev
-ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwer1234';
