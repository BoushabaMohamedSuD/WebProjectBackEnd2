import { GetDataStrategy } from './../Logics/Authenticate/Strategy/Strategys/GetDataStrategy';
import { AuthenticateContent } from '../Logics/Authenticate/Strategy/Contents/AuthenticateContent';
import express from 'express';


const router = express.Router();





router.get('/', (req, res) => {

    res.send("data")

});






exports.router = router;
