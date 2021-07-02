const cluster = require('cluster');
const os = require('os');
const express = require('express');
const connection = require('./config/mongoose');
const router = require('./routes/index.js');
const app = express();
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 8000;
const staticPath = process.env.STATIC_PATH;
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);
app.set('layout extractMetas', true);
app.set('layout', 'layouts/layout');

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static(staticPath));
app.use(expressLayouts)
app.use('/', router);

if(cluster.isMaster) {
    const numCPU = os.cpus().length;
    console.log(`Forking ${numCPU} CPUs`);
    for (let i = 0; i < numCPU; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    app.listen(port, hostname, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log(`worker ${process.pid} is up`)
    });
}