const express    = require('express');
const cors       = require('cors');
const path       = require('path');
const http       = require('http');
const bodyParser = require('body-parser');
const Routes     = require('./server/routes');
const app        = express();

app.use(cors());
app.use(bodyParser.json());
bodyParser.urlencoded({extended: false})

app.use(express.static(path.join(__dirname, 'dist')));
Routes(app, __dirname);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API RUNNING ON LOCALHOST: ${port}`));
