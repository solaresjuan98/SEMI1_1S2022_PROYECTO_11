const { response, json } = require("express")
const { uploadFile, getFileStream, rekognition, translate } = require("../helpers/s3");
const { queries } = require("../db/queries");
const { run } = require("../helpers/polly");
const bucketName = process.env.AWS_BUCKET_NAME;


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


const getUserNotes = async (req, res = response) => {

    const { idUser } = req.params;
    try {

        let userNotes = await queries.getUserNotes(idUser);

        res.status(200).json({
            userNotes,
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

const deleteNote = async (req, res = response) => {

    const { idNota } = req.params;

    try {

        await queries.deleteNoteUser(idNota);
        await queries.deleteNote(idNota);


        res.status(200).json({
            mensaje: 'Eliminar nota',
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


// * Translate note description
const translateDescription = async (req = Request, res = Response) => {

    let p = req.params;
    //console.log(p.language)

    let body = req.body

    let description = body.description
    // German -> de, French -> fr, English -> en
    let params = {
        SourceLanguageCode: 'auto',
        TargetLanguageCode: p.language,
        Text: description || 'Hello there'
    };
    translate.translateText(params, function (err, data) {
        if (err) {
            //console.log(err, err.stack);
            res.send({ error: err })
        } else {
            console.log(data);
            res.send({ message: data })
        }
    });
}

// * Texto a voz de la nota

const textToVoice = async (req = Request, res = Response) => {
    let { textContent } = req.body;

    try {
        const params = {
            LanguageCode: "es-ES",
            OutputS3BucketName: bucketName,
            Text: textContent,
            OutputFormat: "mp3",
            VoiceId: "Joanna"
        }

        let url = await run(params);

        return res.status(200).json({
            mensaje: 'Se ha convertido el texto en voz exitosamente.',
            url,
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
    addNote,
    getUserNotes,
    deleteNote,
    translateDescription,
    textToVoice
}
