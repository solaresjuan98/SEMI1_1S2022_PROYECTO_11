

-- Registro
insert into Usuario(nombreUsuario, carnetUsuario, carreraUsuario, claveUsuario, fotoPerfil) 
values('Carlos Ng', '201810434', 'Ingenieria en Ciencias y Sistemas', '123456', 'https://semi1-practica1.s3.amazonaws.com/2015_Honda_Civic_Si_Coupe_Orange.jpg');

insert into Usuario(nombreUsuario, carnetUsuario, carreraUsuario, claveUsuario, fotoPerfil) 
values('Segio Ariel', '201020252', 'Ingenieria en Ciencias y Sistemas', '123456', 'https://semi1-practica1.s3.amazonaws.com/acatenango_guatemala_volcanes_soy502.jpg');

insert into Usuario(nombreUsuario, carnetUsuario, carreraUsuario, claveUsuario, fotoPerfil) 
values('Juan Solares', '201800496', 'Ingenieria en Ciencias y Sistemas', '123456', 'https://semi1-practica1.s3.amazonaws.com/66135-aesthetic-pc.jpg');


-- Login
select * from Usuario u where u.carnetUsuario = '201810434' and u.claveUsuario = '123456';

select * from Usuario;