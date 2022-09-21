import express from 'express';
import fs from 'fs';
import resize from '../modules/resize';
const routes = express.Router();

routes.get('/', async (req, res) => {
  if (
    Object.keys(req.query).length == 3 &&
    req.query.width &&
    req.query.height &&
    req.query.filename
  ) {
    const width: number = +req.query.width;
    const height: number = +req.query.height;
    const originalFilename = req.query.filename.toString();
    const outputFilename =
      originalFilename + 'Width' + width + 'Height' + height + '.jpg';
    const filename = originalFilename + '.jpg';
    if (fs.existsSync(`./images/editedImages/${outputFilename}`)) {
      // File exists in path
      res.sendFile(`/images/editedImages/${outputFilename}`, { root: '.' });
    } else {
      // File doesnt exist in path
      await resize(width, height, filename, outputFilename);
      res.sendFile(`/images/editedImages/${outputFilename}`, { root: '.' });
    }
  } else {
    res.status(204).send('Bad params');
  }
});

export default routes;
