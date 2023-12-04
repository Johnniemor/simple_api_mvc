const express = require("express");
const config = require("./src/config/db.config");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const bodyParser = require('body-parser');
const router = require('./src/router/router');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use('/api/users', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Check Status code of working ... 🔥
app.get('/status' , (req , res) => {
    if(res.statusCode == 200){
        res.status(200).json({ status: 'Running' });
    }else{
        res.status(500).json({ status:  'Internal server error'});
    }
})

// Check Server Port ....🚀
app.listen(port , () => {
    console.log(`http://localhost:${port}`);
});