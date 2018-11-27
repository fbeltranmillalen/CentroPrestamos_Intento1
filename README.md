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

instalar angular

-npm install -g @angular/cli

crear nueva carpeta para el frontEnd
-ng new frontEnd (toma tiempo)

ingresar a carpeta frontEnd y ejecutar
-ng serve // para inciar el servidor de angular

ingresar a src/app, y crear carpetas components, models y services.

crear un componente con el comando ng g c personas // ng generate component personas

ahora retrocedemos un directorio, e ingresamos a la carpeta models.

creamos una clase con el comando ng g class persona.

finalmente vamos a services y ejecutamos ng g s persona para crear un servicio

* si se crearon los archivos a mano, recordar registrar los componentes a app.module.ts
* recordar importar los componentes a los servicios y vice versa, e instanciar la clase modelo correspondiente

....

npm install cors (para comunicar 2 servidores (angular y node))
