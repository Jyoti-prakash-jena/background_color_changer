const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
console.log(buttons);


function change(e){ 
   console.log(e);
   console.log(e.target);            // e here reperesent the object of the event
 if(e.target.id=="grey"){
    body.style.backgroundColor="grey";
 } //e.target is defined from where the event is coming

 else if(e.target.id=='white'){
   body.style.backgroundColor="white";
 }
 else if(e.target.id=='blue'){
   body.style.backgroundColor="blue";
 }

 else if(e.target.id=='yellow'){
   body.style.backgroundColor="yellow";
 }
}

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function (e){
      change(e);
   });
})


