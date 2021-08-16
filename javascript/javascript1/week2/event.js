function getEventWeekday(eventday)
{
    const weekdays=["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    const today=new Date();
    const eventOn=(today.getDay()+eventday)%7;
    console.log(weekdays[eventOn]);
}
getEventWeekday(15);
getEventWeekday(4);
