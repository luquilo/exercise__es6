const inventory = {
  sunglasses: 100,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

// const orderSunglasses = () => new Promise(mmyExecutor);

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);

// then

const prom = new Promise((resolve, reject) => {
  let number = Math.random();
  if (number > 0.5) {
    resolve("yey!");
  } else {
    reject("oh no!");
  }
});

const handleSuccess = (resolvedValue) => console.log(resolvedValue);
const handleFailure = (rejectedValue) => console.log(rejectedValue);

prom.then(handleSuccess, handleFailure);
