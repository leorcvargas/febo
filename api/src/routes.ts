import { Router } from 'express';

import tracksRoutes from './track';

const apiRoutes = Router();

apiRoutes.use('/api/tracks', tracksRoutes);

export default apiRoutes;
