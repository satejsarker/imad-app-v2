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
button.onclick=function()
{
    //creating request
    var request= new XMLHttpRequest();
    if(request.readyState===XMLHttpRequest.DONE)
    {
        if(request.status===200)
        {
            
            var counter=request.responseText;
            
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
        }
    }
    
    
    //render making request
    request.open('get','http://satejsarker.imad.hasura-app.io',true);
    request.send('null');
    
    
};