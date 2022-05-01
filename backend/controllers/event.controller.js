const { response, json } = require("express")
const { queries } = require("../db/queries");



const getUserEvents = async (req, res = response) => {

    const { idUser } = req.params;

    try {

        let userEvents = await queries.getUserEvents(idUser);

        res.status(200).json({
            userEvents,
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



const createEvent = async (req, res = response) => {

    const { idUsuario, nombreEvento, descripcionEvento, fechaInicio, fechaFinal } = req.body;


    try {


        let userBody = { nombreEvento, descripcionEvento, fechaInicio, fechaFinal };

        let newEvent = await queries.createEvent(userBody);
        let idEvento = newEvent.insertId;

        let newBody = { idUsuario, idEvento };
        await queries.mergeUserEvent(newBody);

        res.status(200).json({
            mensaje: 'Evento creado',
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
    getUserEvents,
    createEvent
}