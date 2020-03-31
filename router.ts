import { Data } from './Data';

import express from 'express';


const router = express.Router();


router.get('/', (req, res) => {

    Data.findAll()
        .then((data) => {
            if (data != null) {
                res.send(data);
            } else {
                res.send("false");
            }
        })
        .catch(() => res.send("false "))


});



exports.router = router;
