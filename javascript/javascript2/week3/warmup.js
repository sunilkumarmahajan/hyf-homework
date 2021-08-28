//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
console.log("text will display after 4 seconds");
setTimeout (() => {
    console.log("4 seconds finished....hello");},2000);
    
//2. Create a function that takes 2 parameters: delay and stringToLog. 
function timeDelay(delay,StringtoLog)
{
    setTimeout (() => {
        console.log(StringtoLog);},delay);      
}
timeDelay(2000, "stringToLog after delay seconds from function ");

/*3. Create a button in html. When clicking this button, use the function you created 
in the previous task to log out the text: Called after 5 seconds 5 seconds after 
the button is clicked.*/

const JsDelayBtn = document.getElementById('DelayBtn');
JsDelayBtn.addEventListener('click', timeDelay1(5000, "Text after given time delay "));
function timeDelay1 (delay,StringtoLog)
{
    setTimeout (() => {
        document.getElementById("root").innerHTML = (StringtoLog);},delay);;  
}

// 4 Create two functions and assign them to two different variables.One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. 
function Earth()
{
    const f1 = "Earth";
}
function Saturn() 
{
    const f1 = "Saturn";
}
function planetLogFunction(param)
{
    console.log(param);
}

planetLogFunction(Earth);
planetLogFunction(Saturn);

//5. Create a button with the text called "Log location". 
//When this button is clicked the location (latitude, longitude) 
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


/*7 Create a function called runAfterDelay. It has two parameters: delay and callback. 
When called the function should wait delay seconds and then call the provided callback function. 
Try and call this function with different delays and different callback functions*/
function runAfterDelay(delay, callback)
{
    setTimeout (() => {
        callback();},delay*1000);
}
runAfterDelay(5, function(){console.log("Should be logged after 5 sec");});
runAfterDelay(2,function () {console.log("Should be logged after 2 sec");}); 
runAfterDelay(10,function()
{console.log("Should be logged after 10 sec hello");}); 
runAfterDelay(1,function () {console.log("Should be logged after 1 sec");}); 

//ex 8 /A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"
document.addEventListener("dblclick", () => console.log("Double click"));

/*ex 9. Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
logFunnyJoke - function and logBadJoke - function. If you set shouldTellFunnyJoke to true 
it should call the logFunnyJoke function that should log out a funny joke. And vice versa.*/
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) 
{
    (shouldTellFunnyJoke) ? logFunnyJoke(): logBadJoke();
}
function logFunnyJoke() {console.log("funnny joke");};
function logBadJoke() {console.log("bad joke");}
jokeCreator(false,logFunnyJoke ,logBadJoke );
jokeCreator(true,logFunnyJoke ,logBadJoke );

//ex. Functions as a variable
function1 = () => console.log("Function One");
function2 = () => console.log("Function Two");
function3 = () => console.log("Function Three");
const functionArray = [function1(), function2(), function3()];
for (let i = 0; i < functionArray.length; i++) { functionArray[i]; }
const funConst = () => console.log('this is a function');
funcNorm = () => console.log('function declaration');
funConst();
funcNorm();
const Obj1 = { num: 1, key1: funcInObj = () => console.log("function as a key in the object") };
funcInObj();