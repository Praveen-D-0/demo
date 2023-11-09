//  let promise = new Promise((resolve, reject) => {
//     // perform some asynchronous operation
//     let result = 5;

//     if (result > 10) {
//         resolve(result); // the promise gets resolved
//     } else {
//         reject('result is not greater than 10'); // reject the promise
//     }
// });

// // define the callbacks passed to the promise
// promise
//     .then(
//         // if the promise gets fulfilled, call the following function
//         (value) => {
//             console.log('Result:', value);
//         },
//         (error) => {
//             console.log('Error:', error);
//         }
//


// new Promise((resolve, reject) => {
//    console.log('initial');
//    resolve();
// })
//    .then(() => {
//        console.log('do this');
//    })
//    .catch(() => {
//        console.log('do that');
//        return Promise.reject();
//       //  return Promise.resolve();
//    })
//    .then(() => {
//        console.log('do this, no matter what happened before');
//        // throw new Error();
//        // return Promise.reject();
//    })
//    .then(() => {
//        console.log('execute this too');
//    })
//    .then(() => {
//        console.log('execute this too after');
//    })
//    .catch(() => {
//        console.log('skipped the above thens');
//    })
 