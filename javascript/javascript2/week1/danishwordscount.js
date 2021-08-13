function danishStringCount(inputStr)
{
    let StrArray = inputStr.split("");
    let å=0; let ø=0; let æ=0;
    for (let i=0; i<StrArray.length;i++)
        {
        if (StrArray[i]=="å")
        {
            å++;
        }
        else if (StrArray[i]==="ø")
        {
            ø++;
        }
        else if (StrArray[i]==="æ")
        {
            æ++;
        }
    }
        console.log(`{total: ${å+ø+æ}, å: ${å}, ø: ${ø}, æ: ${æ}}`);
}
danishStringCount("Blå grød med røde bær");  
danishStringCount("Jeg hår å blå bil");