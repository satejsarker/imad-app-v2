console.log('Loaded!');
var text=document.getElementById("text");
var d=new Date();


var img= document.getElementById('madi');
var margleft=0;
function moveRight()
{
    margleft= margleft+1;
    img.style.marginLeft=margleft+'px';
    
}
img.onclick=function()
{
    var interval=setInterval(moveRight,200);
 
};
var button= document.getElementById("button");
var counter=0;
button.onclick=function()
{
    
    
    //render
    counter+=1;
    var span=document.getElementById("count");
    span.innerHtml=counter.toString();
}