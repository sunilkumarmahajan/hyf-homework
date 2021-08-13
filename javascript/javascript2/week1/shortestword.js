const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findShortestWord (arrywords)
{
    let shortestWord = arrywords[0];
    for (let i=0; i<danishWords.length;i++)
    {
        if(arrywords[i].length < shortestWord.length)
        {
            shortestWord = arrywords[i];
        }
    }
    console.log(`shortest word is ${shortestWord}`);
}
findShortestWord(danishWords); 