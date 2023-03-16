import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';


const routes = new Router();
routes.post('/store', UserController.store);
routes.post('/login', SessionController.store);

//Todas as rotas abaixo do middleware precisan ser autenticadas.
routes.use(authMiddleware);
routes.put('/update', UserController.update);
routes.get('/list', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:task_id',TaskController.update);
routes.delete('/tasks/:task_id',TaskController.delete);
export default routes;
