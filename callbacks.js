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
  
  const squareNum = (num, cb) => {
    let squareNumber = Math.pow(num, 2);
    console.log(`The square of num is ${squareNumber}`);
    cb(squareNumber);
  };
  
  const squareRootNum = (num, cb) => {
    setTimeout( () => {
      let squareRootNumber = Math.sqrt(num);
      console.log(`The square root of num is ${squareRootNumber}`);
      cb(squareRootNumber);
    }, num);
  };
  
  const closestLowerPrimeNum = (num, cb) => {
    let closest = getClosestLowerPrimeNumber(num);
    console.log(`The closest lower prime number of num is ${closest}`);
    cb(closest);
  };
  
  const getDiffTimeSince = (startTime) => {
    let endTime = new Date();
    var timeDiff = endTime - startTime;
    console.log(`The script took ${timeDiff} ms`);
  };
  
  const callbackScript = (num) => {
    if (num < 1 || num > 1000) {
      console.log("The number must be between 1 and 1000!");
      return;
    }
  
    let startTime = new Date();
  
    squareNum(num, () => {
      squareRootNum(num, () => {
        closestLowerPrimeNum(num, () => {
          getDiffTimeSince(startTime);
        });
      });
    });
  };
  