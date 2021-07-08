let firstname,surname,FormalName,gender;
function getFullname(firstname,surname,gender,FormalName)
{
    if (gender==="male" && FormalName==="true")
    {
        return(`Sir ${firstname} ${surname}`);
    }
    else if (gender==="male" && FormalName==="false")
    {
        return(`${firstname} ${surname}`);
    }
    if (gender==="female" && FormalName==="true")
    {
        return(`Madam ${firstname} ${surname}`);
    }
    else if (gender==="female" && FormalName==="false")
    {
        return(`${firstname} ${surname}`);
    }
}
console.log(getFullname("Benjamin","Hughes","male","true"));
console.log(getFullname("Benjamin","Hughes","male","false"));
console.log(getFullname("Ida","Larsen","female","true"));
console.log(getFullname("Ida","Larsen","female","false"));