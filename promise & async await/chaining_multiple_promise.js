const randomNumber = () => {
  return new Promise((resolve, reject) => {
    const number = Math.random();
    if (number > 0.5) {
      resolve("hore");
    } else {
      reject("tidakk");
    }
  });
};

const handleSucces = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
};

const handleDone = () => console.log("operasi selesai");

randomNumber().then(handleSucces).catch(handleFailure).then(handleDone);
