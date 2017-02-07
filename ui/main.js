console.log('Loaded!');
var text=document.getElementById("text");
var d=new Date();
text.innerHTML= ("Month now "+d+1);


var img= document.getElementById('madi');
var margleft=0;
function moveRight()
{
    margleft= margleft+1;
    img.style.marginLeft=margleft+'px';
    
}
img.onclick=function()
{
    var interval=setInterval(moveRight,500);
 
};
