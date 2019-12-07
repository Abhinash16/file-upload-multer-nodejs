const express = require('express');
const router = express.Router();
const multer=require('multer');


let DIR='./uploads';

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,DIR)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
  }) 
let upload = multer({ storage: storage }).single('Image', 10); //req image should be passed with Image key;

router.post('/',(req, res) => {
    upload(req,res,function(err)
      {
        if(err)
        {res.json({'err':1,'msg':'Unexpected error!', err})}
              else
              {
                  let filename =  req.file.filename
                 res.json({'err':0,'msg':'Tada!',filename}) 
          };
      });
  });
  
  router.get('/',(req, res) => {
      res.send('this is working properly')
  })

module.exports = router;