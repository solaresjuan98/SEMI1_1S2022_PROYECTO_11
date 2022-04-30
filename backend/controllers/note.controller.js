const { response, json } = require("express")
const bcrypt = require('bcryptjs');
const { queries } = require("../db/queries");


const addNote = async (req, res = response) => {

    const { idUsuario, contenidoNota, fechaNota, tituloNota } = req.body;

    try {

        let userBody = { contenidoNota, fechaNota, tituloNota };


        let newNote = await queries.createNote(userBody)
        let idNota = newNote.insertId;

        let newBody = { idNota, idUsuario }
        await queries.mergeUserNote(newBody)


        res.status(200).json({
            mensaje: 'Nota registrada.',
            correcto: true,
        });

    } catch (error) {
        console.log(error)

        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }

}


// const getUserNotes = async (req, res = response) => {

// }
module.exports = {
    addNote,
    //getUserNotes
}