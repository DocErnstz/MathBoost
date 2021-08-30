const { db } = require("./pgAdaptor");

db.any('select * from users')
    .then(res => {
        console.log(res);
    });  