const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json());
const upload = require('./controller/upload');

app.use(cors())

app.use('/myimages',express.static('uploads'));

app.use('/api/upload', upload);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));