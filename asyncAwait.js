// // // // // async function coba (){
// // // // //     console.log('satu')
// // // // //     setTimeout(() => console.log('halo'),5000)
// // // // // }

// // // // // coba()

// // // // // async function numberFive() {
// // // // //   return 5;
// // // // // }

// // // // // numberFive().then((resolvedValue) => console.log(resolvedValue));

// // // // const wait = () => {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //         console.log('tiga')
// // // //         resolve()
// // // //     } ,3000)
// // // //   });
// // // // };

// // // // const coba = async () => {
// // // //   await wait();
// // // //   console.log("halo 5");
// // // // };

// // // // coba();

// // // const coba = async (MS) => {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(
// // //             () => {
// // //                 console.log(`the ms is : ${MS}`)
// // //                 resolve()
// // //             },
// // //             MS
// // //         )
// // //     })
// // // }

// // // const anu = async () => {
// // //     const randomMS = Math.floor(Math.random() *5 * 1000)
// // //     console.log(randomMS)
// // //     await coba(randomMS)
// // //     console.log('done')
// // // }

// // // anu()

// // const myPromise = () => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve('resolved!')
// //         },
// //         1500)
// //     })
// // }

// // const yesAwait = async () => {
// //     console.log('hold on a second!')
// //     const data = await myPromise()
// //     console.log(data)
// // }
// // yesAwait()

// /*
// This is the shopForBeans function from the last exercise
// */

// const shopForBeans = () => {
//   return new Promise((resolve, reject) => {
//     const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
//     setTimeout(() => {
//       let randomIndex = Math.floor(Math.random() * 5);
//       let beanType = beanTypes[randomIndex];
//       console.log(`I bought ${beanType} beans because they were on sale.`);
//       resolve(beanType);
//     }, 1000);
//   });
// };

// let soakTheBeans = (beanType) => {
//   return new Promise((resolve, reject) => {
//     console.log("Time to soak the beans.");
//     setTimeout(() => {
//       console.log(`... The ${beanType} beans are softened.`);
//       resolve(true);
//     }, 1000);
//   });
// };

// let cookTheBeans = (isSoftened) => {
//   return new Promise((resolve, reject) => {
//     console.log("Time to cook the beans.");
//     setTimeout(() => {
//       if (isSoftened) {
//         console.log("... The beans are cooked!");
//         resolve("\n\nDinner is served!");
//       }
//     }, 1000);
//   });
// };

// const makeBeans = async () => {
//     let buy = await shopForBeans()

//     let soak = await soakTheBeans(buy)

//     let cook  = await cookTheBeans(soak)
//     console.log(cook)
// }

// makeBeans()

// This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < 0.5) {
    return true;
  } else {
    return false;
  }
};

// This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log("Fingers crossed... Putting the Bean Souffle in the oven");
    setTimeout(() => {
      let success = randomSuccess();
      if (success) {
        resolve("Bean Souffle");
      } else {
        reject("Dinner is ruined!");
      }
    }, 1000);
  });
};

const hostDinnerParty = async () => {
  try {
    const wait = await cookBeanSouffle()
    console.log(wait);
} catch(error) {
    console.log(error)
}
};

hostDinnerParty()