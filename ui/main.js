console.log('Loaded!');
var text=document.getElementById("text");
var d=new Date();
text.innerHTML= ((d.getDate()+1)+"/"+(d.getMonth()+1)+"/"+d.getFullYear());


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
