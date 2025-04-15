import express, { json, Router } from 'express';
import router from './ressources/contact/contact.router.js';
import {config} from './config/app.config.js';
const app = express();




// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/',router)
// app.get('/', (req, res,next) => {
//   res.json({url:req.url, method:req.method, headers:req.headers, path:req.path, query:req.query});
// });


app.listen(8000, () => {
    console.log(`Server running on port ${8000}`);
  });



