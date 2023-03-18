const randomNumber = new Promise((resolve, reject) => {
  const number = Math.random();
  if (number > 0.5) {
    resolve("hore");
  } else {
    reject("tidakk");
  }
});

const handleSucces = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectedValue) => {
  console.log(rejectedValue);
};

randomNumber.then(handleSucces, handleFailure);
