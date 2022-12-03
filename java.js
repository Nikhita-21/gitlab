let b1=document.querySelectorAll(".one");
let a;
let b;
//for(let i=0;i<2;i++)
//{
   // b1[i].addEventListener("click",function f(e){ console.log(e.target.textContent) });
//}
// 

    b1[0].addEventListener('click',function(e){ a =(e.target.textContent); })
    b1[1].addEventListener('click',function(e){ b =(e.target.textContent); })
    b1[2].addEventListener('click',function(e){ c=parseInt(a)+parseInt(b);document.write(c)})