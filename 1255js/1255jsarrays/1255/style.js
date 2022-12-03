//sol
function  module(a,b)
{
    return a%b
}
console.log(module(15,6))
//count
// function count(num)
// {
//     c=0
//     while(num != 0)
//     {
//         num=num//10
//         c++;
//     }
//     return c
// }
// cou=count(126)
// console.log(cou)

//array
function arr(num,len)
{
    a=[]
    for(let i=1;i<=len;i++)
    {
        
        a.push(num*i)
    }
    return a
}
console.log(arr(7,5))
//index
function index(n)
{
    return n[0]
}
m=index([2,6,5,7,3,6])
document.write(m)