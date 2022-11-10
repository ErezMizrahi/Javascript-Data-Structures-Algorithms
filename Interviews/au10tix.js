//problem
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
  
  //make it so it will print the right numbers and not the final number in the loop
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
  
  //make it go one after the other
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), (i + 1) * 1000);
  }
  
  
  //solution to make it so it dosent create all the setTimeouts on the same time
  function setTimeoutEach(index, func) {
    if(index < 5) {
      setTimeout(() => console.log(index), index * 1000)
      index++;
      return setTimeoutEach(index)
    }
  }
  
  setTimeoutEach(0)
  
  
  
  
  //promisify
  
  function callbackAdder(callback, param1, param2) {
    callback(param1 + param2);
  }
  
  function callbackPower2(callback, param1) {
    callback(param1 * param1);
  }
  
  var promiseAdder = promisify(callbackAdder);
  var promisePower2 = promisify(callbackPower2);
  
  (async function () {
    var res1 = await promiseAdder(4, 4);
    // console.log(res1);
    let res2 = await promisePower2(4);
    // console.log(res2);
  
    let res = await q2(promiseAdder(4, 4), promisePower2(4))
    console.log(res)
  })();
  
  /**
   * Question 1 - implement promisify
   */
  
  function promisify(fn) {
    return (...args) => {
      return new Promise((resolve, reject) => {
         return fn(resolve, ...args)
       })
   }
  }
  
  
  /**
   * Question 2 - Run both promises in parallel.
   * Question 3 - Run them 1 after the other
   */
  async function q2(pro1, pro2) {
    Promise.all([pro1, pro2])
    .then((arr) => console.log(arr))
  
    const a = [pro1, pro2]
    for(let pro of a) {
      try {
        const p = await pro
        console.log(p)
      } catch {
  
      }
    }
  }
  