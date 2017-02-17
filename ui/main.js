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
    request.onreadystatechange=function ()
    {
        
    if(request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
            
            var counter=request.responseText;
            
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
        }
    }
    
    };
    
    //render making request
    request.open('get','http://localhost:8080/c',true);
    request.send('null');
    
    
};
//submiting name 
var nameInput=document.getElementById('name');
var namei=nameInput.value;
var submit=document.getElementById('submit_b');
submit.onclick= function()
{
	var names =['name1','name2','satej'];
	
	var list='';
for (var i=0; i<names.length; i++){
			list +='<li>' + names[i] + '</li>';
			}
	var ul=document.getElementById('nameList');
	ul.innerHTML= list;
};

