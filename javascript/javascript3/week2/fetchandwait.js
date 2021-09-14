//Fetching and waiting
/*The 3 steps:
1. Wait 3 seconds. 2. After 3 seconds fetch some data from any api you like 3.Log out the data from the api */

//using promises and .then
const astronautApi = 'http://api.open-notify.org/astros.json';
const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve();
  }, 3000);
});

promise.then(()=>{
  fetch(astronautApi)
.then(response=>response.json())
.then((data)=>console.log(data))
});

//using async/await
async function astronaut(){
  try{
    await promise;
  const astroResponse = await fetch(astronautApi);
    const astronauts= await astroResponse.json();
    console.log("number of astronuts"+ astronauts.number);
  }
  catch(err){
    console.log(err);
  }
}
astronaut();