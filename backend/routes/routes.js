const { Router } = require('express');const multer  = require('multer');
const { addNote } = require('../controllers/note.controller');
//const { uploadPhoto, getPhoto, createAlbum, getUserAlbums, getAlbumImages, uploadPhotoAlbum, deleteAlbum, editAlbum } = require('../controllers/photo.controller');
const { signup, login, editUser, getUsers } = require('../controllers/users.controller');
const upload = multer({ dest: 'uploads/' });
const appRouter = Router();

// * USERS
appRouter.get('/users', getUsers);
appRouter.post('/login', login);
appRouter.post('/registrar_usuario', signup);

// * NOTES
appRouter.post('/agregar_nota', addNote)
appRouter.get('/notes/:id', )

// * EVENTS




// appRouter.post('/subir_foto', upload.single('photo'), uploadPhoto);
// appRouter.post('/registrar_usuario', signup);
// appRouter.post('/editar_usuario', editUser);

// appRouter.post('/crear_album', createAlbum);
// appRouter.post('/subir_foto_album', uploadPhotoAlbum);
// appRouter.get('/albums_usuario/:idUsuario', getUserAlbums);
// appRouter.get('/imagenes_album/:idAlbum', getAlbumImages);
// appRouter.get('/users', getUsers);
// appRouter.post('/eliminar_album/:idAlbum', deleteAlbum);
// appRouter.post('/editar_album', editAlbum);

module.exports = appRouter;
