const { Router } = require('express'); const multer = require('multer');
const { getUserEvents, createEvent } = require('../controllers/event.controller');
const { addNote, getUserNotes, deleteNote, translateDescription, textToVoice } = require('../controllers/note.controller');
const { extractImageText } = require('../controllers/photo.controller');
const { getUserTodos, createTodo, deleteTodo, completeTodo } = require('../controllers/todos.controller');
//const { uploadPhoto, getPhoto, createAlbum, getUserAlbums, getAlbumImages, uploadPhotoAlbum, deleteAlbum, editAlbum } = require('../controllers/photo.controller');
const { signup, login, editUser, getUsers, getPhotoLabels } = require('../controllers/users.controller');
const upload = multer({ dest: 'uploads/' });
const appRouter = Router();

// * USERS
appRouter.get('/users', getUsers);
appRouter.post('/login', login);
appRouter.post('/registrar_usuario', signup);
appRouter.put('/actualizar', editUser);

// * NOTES
appRouter.post('/agregar_nota', addNote)
appRouter.get('/notes/:idUser', getUserNotes)
appRouter.delete('/borrar_nota/:idNota', deleteNote)
appRouter.post('/translate/:language', translateDescription)


// * EVENTS
appRouter.get('/events/:idUser', getUserEvents)
appRouter.post('/agregar_eventos', createEvent)


// * TODOS
appRouter.get('/todos/:idUser', getUserTodos)
appRouter.post('/agregar_todo', createTodo)
appRouter.post('/complete_todo/:idTodo', completeTodo)
appRouter.delete('/borrar_todo/:idTodo', deleteTodo)


// * REKOGNITION
appRouter.post('/get_labels', getPhotoLabels);
appRouter.post('/get_photo_text', extractImageText);

// * POLLY

appRouter.post('/text_to_voice', textToVoice);

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
