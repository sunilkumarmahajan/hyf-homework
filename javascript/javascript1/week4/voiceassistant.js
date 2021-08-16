let inputname = "";
let todo = [];
function getReply(command)
{
    const arraywords = command.toLowerCase().split(" ");
    if (arraywords.includes("hello"))
    {
        inputname = arraywords [arraywords.length-1];
        return `Nice to meet you ${inputname}` ;
    }
    else if (command.includes("What is my name")) 
    {
        return `Your name is ${inputname}` ;
    }
    else if (command.includes("Add fishing"))
    {
       todo.push(command);
       return `fishing added to your todo` ;
    }
    else if (command.includes("Add singing"))
    {
        todo.push(command);
        return `singing added to your todo `;
    }
    else if (command.includes("Remove"))
    {
        for (let i=0; i<todo.length;i++)
        {
           if(todo[i].includes("fishing"))
            {
                todo.splice(i,1); 
                return `Removed fishing from your todo`;
            }
        }
    }
    else if(command.includes("on my todo"))
    {
        return(todo);
    }
    else if (command.includes("What day is it today"))
    {
        const today= new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            year: 'numeric',
            month: 'long'
          });
          return (today);
    }
    else if (command.includes("What is"))
    {
        let num1 = parseInt(arraywords[2]);
        let num2 = parseInt(arraywords[4]);
        let operator = arraywords[3];
        if (operator === "+")
        {
           return (num1 + num2);
        }
        else if (operator === "-")
        {
            return (num1-num2);
        }
        else if (operator === "*")
        {
            return (num1*num2);
        }
        else if  (operator === "/")
        {
            return (num1/num2);
        }
        else
        {
            return("invalid operator");
        }
    }
    else if (command.includes("Set a timer"))
    {
        {
            const myTimer = command.split(" ");
            const timeseconds = myTimer[4] * 60 * 1000;
            setTimeout(()=>{console.log("Javascript - week04 homework finished")}, timeseconds);
            return `timer set for ${myTimer[4]} minutes`;
        }
    }
}
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing added to your todo"
console.log(getReply("Remove fishing from my todo")); //"Removed fishing from your todo"
console.log(getReply("What is on my todo?")); //What is on my todo?
console.log(getReply("What day is it today?")); // like 30. of August 2019
console.log(getReply("What is 23 + 3"));
console.log(getReply("What is 100 - 5"));
console.log(getReply("What is 100 * 2"));
console.log(getReply("What is 9 / 3"));
console.log(getReply("Set a timer for 1 minute"));
