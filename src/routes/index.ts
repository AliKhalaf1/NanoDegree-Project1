import express from 'express'
import fs from 'fs';
import resize from '../modules/resize';
const routes = express.Router();

routes.get ('/',async (req,res)=>{
    if(Object.keys(req.query).length ==3 && req.query.width && req.query.height && req.query.filename) {
        let width:number = +req.query.width;
        let height:number = +req.query.height;
        let originalFilename = req.query.filename.toString();
        let outputFilename = originalFilename+'Width'+ width+ 'Height'+ height+".jpg";
        let filename =originalFilename + '.jpg'
        if (fs.existsSync(`./images/editedImages/${outputFilename}`)) {
            // File exists in path
            res.sendFile(`/images/editedImages/${outputFilename}`,{root:'.'});
          } else {
            // File doesnt exist in path
            await resize(width,height,filename,outputFilename);
            res.sendFile(`/images/editedImages/${outputFilename}`,{root:'.'});

          }
    }
    else{
        res.status(400).send("Bad params");
    }
    
});

export default routes