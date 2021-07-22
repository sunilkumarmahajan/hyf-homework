let activities = [];
function addActivity(activity1, duration1)
{
var date=new Date().toLocaleDateString("en-US"), activity= activity1, duration = duration1;
activities.push({date, activity, duration});
}
addActivity("facebook", 40);
addActivity("whatsup", 20);
addActivity("job search", 50);
addActivity("emails", 20);
addActivity("youtube",45);
addActivity("online games", 30);
addActivity("banking", 10);
//function showStatus
function showStatus()
{
let totalduration = 0;
let maxduration = 240;
    if (activities.length===0)
    {
        return ("Add some activities before calling showStatus");
    }
    else
    {
        for (let i=0; i<activities.length;i++)
        {
            totalduration+=activities[i].duration;
        }
            if (totalduration > maxduration)
            {
                console.log ("You have reached your limit, no more smartphoning for you!");
            }
            else
            {
                console.log (`"You have added ${activities.length} activities. They amount to ${totalduration}  min. of usage"`);
            }
    }
}
showStatus(activities);
//console.log(activities);