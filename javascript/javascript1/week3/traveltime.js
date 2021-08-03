const travelInformation = 
{
    speed: 50,
    destinationDistance: 432,
};
  function calctime()
  { 
     const travelhours = (Math.floor (travelInformation.destinationDistance/travelInformation.speed));
     const travelminutes = (travelInformation.destinationDistance%travelInformation.speed);
     const travelTime = `Travel time is ${travelhours} hours and  ${travelminutes} minutes.`;
     return(travelTime); 
  }
//const travelTime=calctime(travelInformation);
//console.log(travelTime);
console.log(calctime());
