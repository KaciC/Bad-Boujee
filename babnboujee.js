$("button").click(function(){
    var TR=false ;
    var TL=false;
 
$("body").keydown(function(event){ 
    if(!TR){
    if (event.which=== 39){
 $("#migos").css("left",$("#migos").offset().left + 10 ); 
 checkCollision();
    }
}
if(!TL){
 if (event.which=== 37){
 $("#migos").css("left",$("#migos").offset().left - 10 ); 
 checkCollision();
    }
}
if (event.which=== 40){
 $("#raindrop").css("top",$("#raindrop").offset().top + 10 ); 
 checkCollision();
    }
    console.log ($("#migos").offset().left);
});

function checkCollision(){
     var migosLeft = $("#migos").offset().left;
     var boxLeft = $("#box").offset().left;
     var migoRight = migosLeft + $("#migos").width();
     var boxRight = boxLeft + $("#box").width();
    
    if (migoRight> boxLeft && migosLeft > boxRight){}

     if(migoRight===190 && boxLeft===33){
        if(migosLeft===30 && boxRight===533){
        TL=true;
        }
    }
    else{  TL=false;}
            
            
    if(migoRight===600 && boxLeft===33){
        if(migosLeft===440 && boxRight===533){
        TR=true;
        }
    }
    else{
            TR=false;
            }
    //600 33 440 533
    
console.log(migoRight,boxLeft,migosLeft,boxRight);
}
});
 