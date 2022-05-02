const { response } = require("express");
const { queries } = require("../db/queries");


const getUserTodos = async (req, res = response) => {

    const { idUser } = req.params;

    try {

        let userTodos = await queries.getUserTodos(idUser);

        res.status(200).json({
            userTodos,
            correcto: true,
        });

    } catch (error) {
        console.log(error)

        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }
};

const createTodo = async (req, res = response) => {

    const { idUsuario, tituloTodo, contenidoTodo, completado } = req.body;


    try {

        let userBody = { tituloTodo, contenidoTodo, completado };

        let newTodo = await queries.createTodo(userBody);
        let idTodo = newTodo.insertId;

        let newBody = { idUsuario, idTodo };
        await queries.mergeUserTodo(newBody);

        res.status(200).json({
            mensaje: 'Todo creado',
            correcto: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }


}


const deleteTodo = async (req, res = response) => {

    const { idTodo } = req.params;

    try {

        await queries.deleteTodo(idTodo);
        await queries.deleteMergeUserTodo(idTodo);

        res.status(200).json({
            mensaje: 'Eliminar todo',
            correcto: true,
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }

}


const completeTodo = async (req, res = response) => {

    const { idTodo } = req.params;


    try {

        await queries.completeTodo(idTodo);
        //await queries.deleteMergeUserTodo(idTodo);

        res.status(200).json({
            mensaje: 'Todo completado',
            correcto: true,
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }

}

module.exports = {
    getUserTodos,
    createTodo,
    deleteTodo,
    completeTodo
}