const nkn = require('nkn-sdk');

let multiclient = new nkn.MultiClient({
  numSubClients: 4,
  originalClient: false,
});

// const createClient = () => {
//   let multiclient = new nkn.MultiClient({
//     numSubClients: 4,
//     originalClient: false,
//   });
//   console.log(multiclient)
//   return multiclient;
// };

// export const isValidId = (id) => {
//   try {
//     new nkn.Client({
//       seed: id,
//     });
//     return true;
//   } catch (err) {
//     return false;
//   }
// };

// export default {
//   createClient,
// };