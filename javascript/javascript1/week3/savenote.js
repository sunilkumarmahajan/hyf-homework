const notes = [];
//function to input the data
function saveNote(content1, id1)
{
    notes.push({content:content1 , id:id1});
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Clean the house", 3);
saveNote("Go to supermarket", 4);
//console.log(notes);
//function to get the notes
function getNote(id) 
{
let result;
    for (let i = 0; i < notes.length; i++) 
    {
        if (notes[i].id === id) 
        {
            result = notes[i];
            break;
        } 
        else if ((id === " ") || (id.typeof !== "number")) 
        {
            result = "invalid id";
        }
    }
    return result;
}
firstNote = getNote(1);
console.log(firstNote); 
console.log(getNote(2));
console.log(getNote(""));
//function for all ids with data
function logOutNotesFormatted()
 {
    for (let i=0;i<notes.length;i++)
    {
        console.log(`The note with id: ${notes[i].id} has the following note text:  ${notes[i].content}`);
    }
  }
  logOutNotesFormatted(); 