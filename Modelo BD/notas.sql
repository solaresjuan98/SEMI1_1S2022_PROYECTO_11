-- Crear nota

insert into Nota(contenidoNota, fechaNota, tituloNota) 
values('esto es una nota', '12/04/2022', 'Nota ejemplo');

insert into Nota(contenidoNota, fechaNota, tituloNota) 
values('esto es una nota x2', '13/04/2022', 'Nota ejemplo x2');

insert into Nota(contenidoNota, fechaNota, tituloNota) 
values('esto no es una nota', '14/04/2022', 'Nota ejemplo x3');

select * from Nota;

-- Merge del usuario y nota

insert into Nota_Usuario(idUsuario, idNota) 
values(1, 2); -- Usuario 1 con nota 2


insert into Nota_Usuario(idUsuario, idNota) 
values(1, 3); -- Usuario 1 con nota 3

insert into Nota_Usuario(idUsuario, idNota) 
values(2, 1); -- Usuario 2 con nota 1


-- Notas del usuario

select n.tituloNota, n.contenidoNota 
from Nota_Usuario nu join Usuario u on u.idUsuario = nu.idUsuario
join Nota n on n.idNota = nu.idNota
where u.idUsuario = 1;


select * from Nota_Usuario;

    
