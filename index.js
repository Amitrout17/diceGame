var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
var diceno1="dice"+a+".png";
var diceno2="dice"+b+".png";
var one=document.querySelectorAll("img")[0];
one.setAttribute("src",diceno1);
var two=document.querySelectorAll("img")[1];
two.setAttribute("src",diceno2);
if(a>b)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else
if(b>a)
{
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}
