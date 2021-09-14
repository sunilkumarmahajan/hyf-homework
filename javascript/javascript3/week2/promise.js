//task2 Promise that resolves after set time
function resolveAfterSetTime(resolveAfter) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, resolveAfter * 1000);
    });
  }
 //async/await
  async function asynCall() {
    await resolveAfterSetTime(4);
    console.log("I am called asynchronously"); 
  }
  asynCall();