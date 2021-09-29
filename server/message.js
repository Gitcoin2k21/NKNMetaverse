const nkn = require('nkn-sdk');

let multiclient = new nkn.MultiClient({
    numSubClients: 4,
    originalClient: false,
  });
console.log(multiclient)