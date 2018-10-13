import { Router } from 'express';

import controller from './controller';
import { upload } from './multer';

const routes = Router();

routes.post('/', upload.single('track'), controller.save);

routes.put('/:trackId', controller.updateTrackName);

routes.put('/image/:trackId', upload.single('img'), controller.saveImage);

routes.get('/', controller.getAll);

routes.delete('/:trackId', controller.deleteTrack);

export default routes;
