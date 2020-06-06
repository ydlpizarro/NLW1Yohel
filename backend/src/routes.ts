import express from 'express';
import PointsController from './controllers/PointsControllers';
import ItemsController from './controllers/ItemsControllers';

//index, show, create, update, delete

const routes = express.Router();
const pointscontroller = new PointsController();
const itemscontroller = new ItemsController();

routes.get('/items', itemscontroller.index);

routes.post('/points', pointscontroller.create);

routes.get('/points/:id', pointscontroller.show);

routes.get('/points', pointscontroller.index);

export default routes;