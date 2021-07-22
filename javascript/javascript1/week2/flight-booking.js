function getFullname(firstname,surname,gender,formalName)
{
    if (gender==="male" && formalName==="true")
    {
        return(`Sir ${firstname} ${surname}`);
    }
    else if (gender==="male" && formalName==="false")
    {
        return(`${firstname} ${surname}`);
    }
    if (gender==="female" && formalName==="true")
    {
        return(`Madam ${firstname} ${surname}`);
    }
    else if (gender==="female" && formalName==="false")
    {
        return(`${firstname} ${surname}`);
    }
}
console.log(getFullname("Benjamin","Hughes","male","true"));
console.log(getFullname("Benjamin","Hughes","male","false"));
console.log(getFullname("Ida","Larsen","female","true"));
console.log(getFullname("Ida","Larsen","female","false"));
