
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
### *Descripción del proyecto* <a name="Descripcion"></a>
---
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


* App web: <br>
La aplicación web fue desarrollada con el framework React.


### *Presupuesto*<a name="Presupuesto"></a>
---


### *Servicios Utilizados* <a name="Servicios"></a>
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