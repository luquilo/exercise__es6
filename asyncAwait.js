// // async function coba (){
// //     console.log('satu')
// //     setTimeout(() => console.log('halo'),5000)
// // }

// // coba()

// // async function numberFive() {
// //   return 5;
// // }

// // numberFive().then((resolvedValue) => console.log(resolvedValue));

// const wait = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('tiga')
//         resolve()
//     } ,3000)
//   });
// };

// const coba = async () => {
//   await wait();
//   console.log("halo 5");
// };

// coba();



const coba = async (MS) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(`the ms is : ${MS}`)
                resolve()
            },
            MS
        )
    })
}


const anu = async () => {
    const randomMS = Math.floor(Math.random() *5 * 1000)
    console.log(randomMS)
    await coba(randomMS)
    console.log('done')
}

anu()