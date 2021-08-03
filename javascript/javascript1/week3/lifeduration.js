const seriesDurations = [
  {
    title: "He & she",
    days: 0,
    hours: 13,
    minutes: 0,
  },
  {
    title: "Alt er Love",
    days: 0,
    hours: 8,
    minutes: 15,
  },
    {
      title: "American Dad",
      days: 4,
      hours: 22,
      minutes: 4,
  }
  ];
function logOutSeriesText() 
{
 const avgLifespan=80*365*24*60;
 let TotalDuration = 0;
 let Timetoook=[];
for (let i = 0; i<seriesDurations.length;i++)
 {
  Timetoook[i] =  ((seriesDurations[i].days*24*60 + seriesDurations[i].hours*60 + seriesDurations[i].minutes)/avgLifespan*100).toFixed(3);
  console.log(`${seriesDurations[i].title} took ${Timetoook[i]}% of my life`);
  TotalDuration += parseFloat(Timetoook[i]);
}
console.log(`In total that is ${(TotalDuration).toFixed(3)}%of my life`);
}
logOutSeriesText(); 
