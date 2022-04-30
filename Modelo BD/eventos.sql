-- Crear evento

insert into Evento(nombreEvento, descripcionEvento, fechaInicio, fechaFinal) 
values('Evento 1', 'descripcion evento 1', '12/05/2022', '24/05/2022');

insert into Evento(nombreEvento, descripcionEvento, fechaInicio, fechaFinal) 
values('Evento 2', 'descripcion evento 2', '29/04/2022', '03/05/2022');

insert into Evento(nombreEvento, descripcionEvento, fechaInicio, fechaFinal) 
values('Evento 3', 'descripcion evento 3', '30/04/2022', '04/05/2022');

select * from Evento;

-- Merge evento con usuario
insert into Evento_Usuario(idUsuario, idEvento) 
values(2, 2); -- Usuario 2 con evento 2


insert into Evento_Usuario(idUsuario, idEvento) 
values(1, 3); -- Usuario 1 con evento 3

insert into Evento_Usuario(idUsuario, idEvento) 
values(3, 1); -- Usuario 3 con evento 1

select * from Evento_Usuario;

-- Obtener eventos por usuario (id)

select e.nombreEvento, e.descripcionEvento, e.fechaInicio, e.fechaFinal 
from Evento_Usuario eu join Usuario u on u.idUsuario = eu.idUsuario
join Evento e on e.idEvento = eu.idEvento
where u.idUsuario = 1;

