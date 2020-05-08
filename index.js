'use strict';

let port = process.env.PORT || 3000;
if (process.env.NODE_ENV === 'test')
  port = 8090;
let app = require('./app');

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
