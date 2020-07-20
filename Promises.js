const getClosestLowerPrimeNumber = (end) => {
    var primes = [];
  
    for (var number = 1; number < end; number++) {
        var primeNumberDividers = [];
        for (var divider = 1; divider <= number; divider++) {
            if (number % divider === 0) {
                primeNumberDividers.push(divider);
            }
        }
  
        if (primeNumberDividers.length === 2) {
            primes.push(number);
        }
    }
  
    return primes.pop();
  }
  
  const squareNum = (num) => {
    return new Promise((resolve, reject) => {
      if (num < 1 || num > 1000) {
        reject("The number must be between 1 and 1000!");
      } else {
        let squareNumber = Math.pow(num, 2);
        console.log(`The square of num is ${squareNumber}`);
        resolve();
      }
    });
  };
  
  const squareRootNum = (num) => {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        let squareRootNumber = Math.sqrt(num);
        console.log(`The square root of num is ${squareRootNumber}`);
        resolve();
      }, num);
    });
  };
  
  const closestLowerPrimeNum = (num) => {
    return new Promise((resolve, reject) => {
      let closest = getClosestLowerPrimeNumber(num);
      console.log(`The closest lower prime number of num is ${closest}`);
      resolve();
    });
  };
  
  const getDiffTimeSince = (startTime) => {
    let endTime = new Date();
    var timeDiff = endTime - startTime;
    console.log(`The script took ${timeDiff} ms`);
  };
  
  const promiseScript = (num) => {
    let startTime = new Date();
  
    squareNum(num)
      .then( () => squareRootNum(num))
      .then( () => closestLowerPrimeNum(num))
      .then( () => getDiffTimeSince(startTime))
      .catch( (errorMessage) => console.log(errorMessage));
  };
  