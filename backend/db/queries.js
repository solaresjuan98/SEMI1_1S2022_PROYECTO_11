const { response } = require("express");
const pool = require("./db");



// ? ========================= USERS ===============================
const findUser = (carnetUsuario) => {
    return new Promise((resolve, reject) => {
        let query = `select * from Usuario
        where carnetUsuario = '${carnetUsuario}';`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });
}


const createUser = (userBody) => {
    let { carnetUsuario, nombreUsuario, carreraUsuario, claveUsuario, fotoPerfil } = userBody;
    return new Promise((resolve, reject) => {

        let query = `insert into Usuario(nombreUsuario, carnetUsuario, carreraUsuario, claveUsuario, fotoPerfil)
        values ('${nombreUsuario}', '${carnetUsuario}', '${carreraUsuario}', '${claveUsuario}' ,'${fotoPerfil}');`;
        pool.query(query, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
}

const login = (userBody) => {
    let { carnetUsuario, claveUsuario } = userBody;
    //console.log(userBody.carnetUsuario)
    // select * from Usuario u where u.carnetUsuario = '201810434' and u.claveUsuario = '123456'
    return new Promise((resolve, reject) => {
        let query = `select * from Usuario u where u.carnetUsuario = '${carnetUsuario}' and u.claveUsuario = '${claveUsuario}' ;`
        pool.query(query, (err, res) => {

            if (err) reject(err);
            resolve(res);
        });
    });
}



const updateUser = (nombreUsuario, idUsuario) => {

    return new Promise((resolve, reject) => {

        let query = `
        update Usuario
            set nombreUsuario = '${nombreUsuario}'
        where idUsuario = ${idUsuario};

        `
        pool.query(query, (err, res) => {

            if (err) reject(err);
            resolve(res);
        });
    });

}

const updateUserWithPhoto = (nombreUsuario, file, idUsuario) => {

    return new Promise((resolve, reject) => {

        let query = `
        update Usuario
            set nombreUsuario = '${nombreUsuario}',
            fotoPerfil    = '${file}'
        where idUsuario = ${idUsuario};

        `
        pool.query(query, (err, res) => {

            if (err) reject(err);
            resolve(res);
        });
    });

}


const getUsers = () => {

    return new Promise((resolve, reject) => {

        let query = `
        Select * from Usuario
        `
        pool.query(query, (err, res) => {

            if (err) reject(err);
            resolve(res);
        });
    });

}


// ? ========================= NOTES ===============================


const createNote = (userBody) => {
    let { contenidoNota, fechaNota, tituloNota } = userBody;
    return new Promise((resolve, reject) => {

        let query = `insert into Nota(contenidoNota, fechaNota, tituloNota) 
        values('${contenidoNota}', '${fechaNota}', '${tituloNota}') `
        pool.query(query, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
}


const mergeUserNote = (userBody) => {

    let { idUsuario, idNota } = userBody;
    return new Promise((resolve, reject) => {
        let query = `insert into Nota_Usuario(idUsuario, idNota) 
        values(${idUsuario}, ${idNota})`
        pool.query(query, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });

    })

}


const getUserNotes = async (idUser) => {


    return new Promise((resolve, reject) => {
        let query = `select n.idNota, n.tituloNota, n.contenidoNota 
        from Nota_Usuario nu join Usuario u on u.idUsuario = nu.idUsuario
        join Nota n on n.idNota = nu.idNota
        where u.idUsuario = ${idUser}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });

}

const deleteNote = async (idNota) => {


    return new Promise((resolve, reject) => {
        let query = `delete from Nota where idNota = ${idNota}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });

}

const deleteNoteUser = async (idNota) => {


    return new Promise((resolve, reject) => {
        let query = `delete from Nota_Usuario where idNota = ${idNota}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });

}


// ? ========================= EVENTS ===============================


const getUserEvents = async (idUser) => {


    return new Promise((resolve, reject) => {
        let query = `select e.nombreEvento, e.descripcionEvento, e.fechaInicio, e.fechaFinal 
        from Evento_Usuario eu join Usuario u on u.idUsuario = eu.idUsuario
        join Evento e on e.idEvento = eu.idEvento
        where u.idUsuario = ${idUser}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });

}


const createEvent = async (eventBody) => {

    const { nombreEvento, descripcionEvento, fechaInicio, fechaFinal } = eventBody;

    return new Promise((resolve, reject) => {
        let query = `insert into Evento(nombreEvento, descripcionEvento, fechaInicio, fechaFinal) 
        values('${nombreEvento}', '${descripcionEvento}', '${fechaInicio}', '${fechaFinal}')`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });


}


const mergeUserEvent = async (newBody) => {

    let { idUsuario, idEvento } = newBody;
    return new Promise((resolve, reject) => {
        let query = `insert into Evento_Usuario(idUsuario, idEvento) 
        values(${idUsuario}, ${idEvento})`
        pool.query(query, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });

    })

}

// ? ========================= TODOS ===============================

const getUserTodos = async (idUser) => {

    return new Promise((resolve, reject) => {

        let query = `select t.idTodo, t.tituloTodo, t.contenidoTodo, t.completado
        from Todo_Usuario tu join Usuario u on u.idUsuario = tu.idUsuario
        join Todo t on t.idTodo= tu.idTodo
        where u.idUsuario = ${idUser}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });

}


const createTodo = async (eventBody) => {

    const { tituloTodo, contenidoTodo, completado } = eventBody;

    return new Promise((resolve, reject) => {
        let query = `insert into Todo(tituloTodo, contenidoTodo, completado)
        values('${tituloTodo}', '${contenidoTodo}', 0);`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });


}

const mergeUserTodo = async (newBody) => {

    let { idUsuario, idTodo } = newBody;
    return new Promise((resolve, reject) => {
        let query = `insert into Todo_Usuario(idUsuario, idTodo) 
        values(${idUsuario}, ${idTodo})`
        pool.query(query, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });

    })

}


const completeTodo = async (idTodo) => {

    return new Promise((resolve, reject) => {
        let query = `update Todo set completado = true where idTodo = ${idTodo}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });


}



const deleteTodo = async (idTodo) => {


    return new Promise((resolve, reject) => {
        let query = `delete
        from Todo_Usuario
        where idTodo = ${idTodo}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });


}

const deleteMergeUserTodo = async (idTodo) => {
    return new Promise((resolve, reject) => {

        let query = `delete
            from Todo
            where idTodo = ${idTodo}`;

        pool.query(query, (err, res) => {
            if (err) reject(err);
            return resolve(res);
        });
    });

}


let queries = {
    // * USERS
    findUser,
    createUser,
    login,
    updateUser,
    updateUserWithPhoto,
    getUsers,
    // * NOTES
    createNote,
    mergeUserNote,
    getUserNotes,
    deleteNote,
    deleteNoteUser,
    // * EVENTS
    getUserEvents,
    createEvent,
    mergeUserEvent,
    // * TODOS
    getUserTodos,
    createTodo,
    mergeUserTodo,
    deleteTodo,
    deleteMergeUserTodo,
    completeTodo

}

module.exports = {
    queries
}
