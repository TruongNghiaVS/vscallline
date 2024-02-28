
const axios = require('axios');
const Response = require('../helpers/Response')
const fs = require('fs');

var self =module.exports = {
     getFile: async (req, res) => {
    const  {filePath} = req.query;
      try { 
            if (!fs.existsSync(filePath)) {
                res.sendStatus(404);
                return;
            }
             res.download(filePath); // Set disposition and send it.
           
      } catch (err) {
        res.sendStatus(404);
     }
  },

  deleteFile: async (req, res) => {
    const  {filePath} = req.body;
    console.log(filePath);
      try { 
            if (!fs.existsSync(filePath)) {
            res.sendStatus(404);
            return;
            }

            fs.unlink(filePath, (err) => {
                  if (err) throw err //handle your error the way you want to;
                     console.log('path/file.txt was deleted');//or else the file will be deleted

                     res.sendStatus(200);
            });
           
      } catch (err) {
        res.sendStatus(404);
     }
  }


}