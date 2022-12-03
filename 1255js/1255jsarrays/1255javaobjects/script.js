//1
const details={
    firstname :'nikhita',
    lastname :'gorantla',
    occupation :'student',
};
const me=Object.create(details)
//2
//console.log(details.firstname)
//console.log(details['firstname'])
console.log(me.firstname)
console.log(me.lastname)
console.log(me.occupation)
console.log(Object.values(details))
//3
details.hobby='singing'
delete details.occupation
console.log(details)
//4

const nameandhobbies=
{
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}
const ob=Object.create(nameandhobbies)
for(let values in nameandhobbies)
{
console.log(nameandhobbies[values],'=>')//,nameandhobbies[key])    
}
//5
nameandhobbies.nikhita='singing'
console.log(nameandhobbies);
//6

    if('nikhita' in nameandhobbies)
    {
        console.log(nameandhobbies['key'],nameandhobbies['nikhita'])
    }
