
# **Proyecto 1 Seminario de Sistemas 1**

### *Indice*
1. [Integrantes](#Integrantes)
2. [Objetivos del proyecto](#Objetivos)
3. [Descripción del proyecto](#Descripcion)
2. [Arquitectura](#Arquitectura)
3. [Presupuesto](#Presupuesto)
4. [Servicios](#Servicios)




### *Integrantes Grupo 11* <a name="Integrantes"></a>
---
| Nombre        | Carné        |
|---------------|--------------|
|Fernando Augusto Armira Ramirez  |201503961|
|Carlos Ojani Ng Valladares|201801434 |
|Juan Antonio Solares Samayoa|201801434 |
|Sergio Ariel Ramírez Castro|201020252|

### *Objetivos del proyecto* <a name="Objetivos"></a>
---
* Aumentar la productividad de los estudiantes 
* Ser una comunidad activa entre los estudiantes
* Gestionar las actividades del semestre a traves de las distintas herramientas que brinda la aplicacion
* Tener comunicacion con usuarios interesados en un tema en especifico
### *Descripción del proyecto* <a name="Descripcion"></a>
---
USAC productivity App es una aplicación que ayuda a elevar la productividad de los estudiantes universitarios
La aplicación es conocida por contar con una comunidad activa de estudiantes que se ayudan
en alcanzar sus metas de estudios y compartir nuevas ideas. En esta aplicación se puede escribir notas y se pueden traducir hasta 3 idiomas diferentes y descargarlas en un archivo de texto.  Agregar eventos a un calendario para que el usuario pueda administrar su tiempo de la mejor forma.
Se permite accede a la aplicación con usuario y contraseña. Se pueden realizar grupos de estudio para poder cooperar en equipo. La aplicación contará con un bot de ayuda para los usuarios.

### *Arquitectura* <a name="Arquitectura"></a>
---
 
 Para el proyecto se utilizo una arquitectura cliente-servidor. A continuación se describen los elementos que componen la arquitectura.

* Bucket de imagenes:<br>
Se utiliza el servicio de AWS S3 para el almacenamiento de las imagenes que carquen los usuarios desde la aplicación web.

* Base de datos:<br>
Motor de base de datos MySQL utilizando el servicio de AWS, RDS para operar y gestionar la base de datos en la nube. 

* Servidor web NodeJS: <br>
Servidor programado en nodeJS, montado en una instancia de AWS EC2

* Balanceador de carga: <br>
Para distribuir las peticiones de los usuarios entre los dos servidores se utilizó el servicio de AWS Load Balancing.

* Análisis de imágenes: <br>
Se utilizó el servicio de AWS Rekognition.


* App web: <br>
La aplicación web fue desarrollada con el framework React.


### *Presupuesto*<a name="Presupuesto"></a>
---


### *Servicios Utilizados:* <a name="Servicios"></a>
---

### *AWS S3*
---

<p>Vamos a Amazon S3</p>
<img src="src/S1.png">
<p>	Creamos un bucket , le damos un nombre Elegimos una región</p>
<img src="src/S2.png">
<p>	Le damos permisos al usuario, de acceso publico</p>
<img src="src/S3.png">
<p>	Deshabilitamos control de versiones Agregamos una etiqueta opcional</p>
<img src="src/S4.png">
<p>Subimos imágenes </p>

<img src="src/s3_1.png"> <br><br>
<img src="src/s3_2.png"><br>


### *AWS EC2*
---
Instancias utilizadas con los servidores:
<img src="src/ec2.png"><br>

### *AWS RDS*
---
Motor de base de datos MySQL utilizando el servicio de AWS, RDS para operar y gestionar la base de datos en la nube.

<p>Crear RDS de MySql</p>
<p>Sehleccionar el servicio RDS  en la parte de Database</p>
<p>Crear una database</p>
<img src="src/S5.png">
<p>Como generar el método le damos en stardard</p>
<p>Engine options seleccionamos MySql </p>
<img src="src/S6.png">
<p>En Templates le damos en Free Tier – seleccionar esta opción para que sea gratuito</p>
<img src="src/S7.png">
<p>Seleccionamos nombre del usuario</p>
<p>Cohntraseña del usuario</p>
<img src="src/S8.png">
<p>En tamaño de damos por default</p>
<p>No mas de 20 Gb para que no se realice el cobro</p>
<img src="src/S9.png">
<p>En Conectividad lo dejamos en default</p>
<p>En la parte de Acceso publico le damos permiso que si</p>
<p>En VPC security group seleccionamos un grupo</p>
<img src="src/S10.png">
<p>En configuración del puerto le dejamos el default</p>
<p>Luhego seleccionamos en conectividad y seguridad y </p>
<p>visualizamos el endpoint  y el puerto de la base de datos creada </p>
<img src="src/S11.png">


### AWS Elastic Load Balancing
---

Pasos  para configurar AWS Load Balancing: <br>
Desde AWS EC2, en equilibrio de carga, y luego balanceadores de carga le damos clic a crear balanceador de carga.  
<img src="src/elb1.png">
Elegimos Application load balancer
<img src="src/elb2.png">
Le ponemos nombre a nuestro balanceador
<img src="src/elb3.png">
Seleccionamos las áreas, se recomiendan como minimo seleccionar 2
<img src="src/elb4.png">
Configuramos un nuevo security group
<img src="src/elb6.png">
Agregamos una nueva regla de entrada
<img src="src/elb7.png">
Creamos nuestro target group
<img src="src/elb8.png">
Seleccionamos instancias
<img src="src/elb9.png">
Configuramos nombre y puerto
<img src="src/elb10.png">
Agregamos las instancias que formaran parte del balanceador
<img src="src/elb10.png">
Creamos el load balancer.

### AWS Lambda
---
AWS Lambda es un servicio informático sin servidor y basado en eventos que le permite ejecutar código para prácticamente cualquier tipo de aplicación o servicio backend sin necesidad de aprovisionar o administrar servidores.

En el proyecto se implementaron funciones lambda para utilizar el servicio de aws simple notification service atraves del aws-sdk y node js.

Para crear una nueva función desde la consola le damos clic en crear una función
<img src="src/l1.png">

Configuramos las distinas opciones como el nombre, lenguaje de programación, permisos.

<img src="src/l2.png">

Programamos nuestra funcion, para guardar le damos en deploy. Tambien podemos testear nuestra funcion.

<img src="src/l3.png">

### AWS Api gateway
---
Amazon API Gateway es un servicio completamente administrado que facilita a los desarrolladores la creación, la publicación, el mantenimiento, el monitoreo y la protección de API a cualquier escala. Las API actúan como la "puerta de entrada" para que las aplicaciones accedan a los datos.

A traves de la api gateway el frontend en react puede hacer uso de las funciones lambda previamente creadas.

Desde la consola en el servicio de api gateway le damos en crear API.

<img src="src/api1.png">

En nuestro caso seleccionamos crear api rest

<img src="src/api2.png">

Configuramos las distintas opciones, como nombre, protocolo, entre otras opciones.

<img src="src/api3.png">

En nuestra api podemos crear recursos y métodos donde podemos hacer uso de las funciones lambda.

<img src="src/api4.png">

Tenemos la opcion de habilitar CORS. Para implementar nuestra api le damos en implementar, seleccionamos o creamos una nueva fase.

<img src="src/api5.png">

### AWS Simple Notification Service
---

Amazon SNS es un servicio que permite enviar notificaciones de inserción a aplicaciones móviles, mensajes de texto a números de teléfonos móviles y correos electrónicos de texto sin formato a direcciones de correo electrónico. Puede distribuir mensajes con un tema o publicar en puntos de enlace móviles directamente.

<img src="src/sns1.png">

En el proyecto se implemento este servicio a traves de funciones lambda utilizando node js.

A continuacion se muestran como usar SNS desde la consola de amazon. Para crear un nuevo tema damos en crear tema.

<img src="src/sns2.png">

Configuramos los protocolos de suscripcion, nombre del tema entre otras opciones. 

<img src="src/sns3.png">

Podemos gestionar las suscripciones de los distintos temas.

<img src="src/sns4.png">

Para enviar un mensaje, entramos al tema y luego en publicar mensaje.


<img src="src/sns5.png">