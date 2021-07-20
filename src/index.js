require('dotenv').config();
require('./config/database');

const app = require('./config/express');

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
