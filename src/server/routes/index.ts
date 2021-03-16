// import * as express from 'express';

// const router = express.Router();

// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });

// export default router;

import * as express from 'express';
import apiRouter from './api';

const router = express.Router();

router.use('/api', apiRouter);

export default router;
