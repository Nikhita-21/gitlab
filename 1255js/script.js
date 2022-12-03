//add
function add(a,b)
{
    return (a+b);
}
f=add(2,7)
document.write(f)
//conversion
function conv(min)
{
    return min*60
}
c=conv(3)
document.write(c)
// Increment
function incr(num)
{
    return num+1
}
n=incr(5)
document.write(n)
// area
function area(b,h)
{
    return 0.5*b*h
}
a=area(4,5)
document.write(a)
//age
function age(a)
{
    return (a*365)
}
ag=age(5)
document.write(ag)
//compare
function compare(n)
{
    if(n<=0)
        return true
    else
        return false
}
cmp=compare(-4)
document.write(cmp)
//TRUE VALUES
function value(v)
{
    count=0
    for (let x=0;x<v.length;x++)
    {
        if(v[x]==true)
        count++;
    }
    return count
}
val=value([true,false,true,true,true,false,])
document.write(val)
//count
cou=function (num)
 {
    coun=0
    while(num%10 != 0)
    {
        coun++;
    }   return coun;
 }
 co=cou(123456)
 document.write(co)