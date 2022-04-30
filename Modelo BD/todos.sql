insert into Todo(tituloTodo, contenidoTodo, completado)
values('Todo 1', 'Contenido 1', 0);

insert into Todo(tituloTodo, contenidoTodo, completado)
values('Todo 2', 'Contenido 3', 1);

insert into Todo(tituloTodo, contenidoTodo, completado)
values('Todo 3', 'Contenido 2', 0);

-- Merge todos y usuarios
insert into Todo_Usuario(idUsuario, idTodo) 
values(1, 2); -- Usuario 2 con todo 2


insert into Todo_Usuario(idUsuario, idTodo) 
values(1, 1); -- Usuario 1 con todo 1

insert into Todo_Usuario(idUsuario, idTodo) 
values(3, 1); -- Usuario 3 con todo 1


-- Obtener todos por usuario (id)

select t.tituloTodo, t.contenidoTodo, t.completado
from Todo_Usuario tu join Usuario u on u.idUsuario = tu.idUsuario
join Todo t on t.idTodo= tu.idTodo
where u.idUsuario = 1;
