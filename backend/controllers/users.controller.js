const { response, json } = require("express")
const { rekognition } = require("../helpers/s3");
const { queries } = require("../db/queries");


const getUsers = async (req, res = response) => {

    try {

        let users = await queries.getUsers();

        res.status(200).json({
            users,
            correcto: true,
        });

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }
}

const signup = async (req, res = response) => {
    const { nombreUsuario, carnetUsuario, carreraUsuario, claveUsuario, fotoPerfil } = req.body;
    try {
        // Consulta para validar existencia del usuario
        let userExists = await queries.findUser(carnetUsuario);
        if (userExists.length !== 0) {
            return res.status(400).json({
                mensaje: 'El usuario ya se encuentra en uso.',
                correcto: false,
            })
        }

        // Encriptar contraseña
        // const salt = bcrypt.genSaltSync(10);
        // hashedPassword = bcrypt.hashSync( claveUsuario, salt );
        // console.log(hashedPassword);

        let userBody = { nombreUsuario, carnetUsuario, carreraUsuario, claveUsuario, fotoPerfil };

        let results = await queries.createUser(userBody);
        
        res.status(200).json({
            mensaje: 'Usuario registrado.',
            correcto: true,
        });

    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }





}

const login = async (req, res = response) => {

    const { carnetUsuario, claveUsuario } = req.body;
    //console.log(req.body)
    try {

        // Consulta para validar existencia del usuario
        let userExists = await queries.findUser(carnetUsuario);

        if (userExists.length === 0) {
            return res.status(400).json({
                mensaje: 'Usuario incorrecto.',
                status_login: false
            });
        }

        // Consulta login usuario
        let userBody = { carnetUsuario, claveUsuario };
        //console.log("--",userBody)
        let loggedUser = await queries.login(userBody);
        console.log(loggedUser)
        let claveDB = loggedUser[0].claveUsuario;

        if (claveDB !== claveUsuario) {
            return res.status(400).json({
                mensaje: 'Credenciales incorrectas',
                status_login: false,
            });
        }

        //Verificar contraseña
        // const validPassword = bcrypt.compareSync( claveUsuario, claveDB );
        // if( !validPassword ) {
        //     return res.status(400).json({
        //         mensaje: 'Credenciales incorrectas',
        //         status_login: false
        //     });
        // }

        res.status(200).json({
            mensaje: 'Login correcto',
            status_login: true,
            usuario: {
                idUsuario: loggedUser[0].idUsuario,
                nombreUsuario: loggedUser[0].nombreUsuario,
                carnetUsuario: loggedUser[0].carnetUsuario,
                carreraUsuario: loggedUser[0].carreraUsuario,
                fotoPerfil: loggedUser[0].fotoPerfil
            }
        });



    } catch (error) {
        console.log(error)
        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }

}

const editUser = async (req, res = response) => {

    const { uid, usuario, file } = req.body;

    try {

        if (!file || file.length !== 0) {
            await queries.updateUserWithPhoto(usuario, file, uid);
        } else {
            await queries.updateUser(usuario, uid);
        }

        res.status(200).json({
            mensaje: 'Usuario actualizado.',
            status_login: true,
        });



    } catch (error) {
        console.log(error)
        return res.status(400).json({
            mensaje: 'Error en el servidor. Contacte con el administrador.',
            correcto: false,
        });
    }

}


const getPhotoLabels = async (req = request, res = Response) => {

    let { image } = req.body;

    let params = {
        Image: {
            S3Object: {
                Bucket: "semi1-practica1",
                Name: image
            }
        }
    };


    await rekognition.detectLabels(params, function (err, data) {
        if (err) {
            return res.json({
                message: 'Error',
                error: err
            })
        } else {
            return res.json({
                detection: data
            })
        }
    })

}

module.exports = {
    getUsers,
    login,
    signup,
    editUser,
    getPhotoLabels
}
