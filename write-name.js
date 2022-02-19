let choose = document.querySelectorAll(".choose");
let dives = document.querySelectorAll("div");
let stup  = document.querySelector(".stup");
let restart  = document.querySelector(".restart");
let close    = document.querySelector(".close");
let clear    = document.querySelector(".clear");   
let d;
let c;
let enter = document.querySelector(".input");
let but = document.querySelectorAll("button");
let screen =  document.querySelector("#screen");
let count = 0 ;
let imgs = [];


 
///////////////////////////////////////////

for(c = 0; c < choose.length; c++){
   
    choose[c].addEventListener("click" , function(){

        imgs.length = 0;
        count   = 0;
        imgs = [];
        screen.value = "";
    
        for(d = 0; d < dives.length; d = d + 1){
        

          dives[d].classList.remove("show"); 
          
            if(dives[d].title == this.title){
                 dives[d].classList.add("show"); 
                 
                 images = document.querySelectorAll("div.show  > img");
                imgs.push(...images); 
                console.log(imgs);

           }    
        }
    });

}
///////////////////////////////////////////////////////
   function Fbuttons(){
    for(b = 0 ; b < but.length  ; b++ ){ 
          but[b].addEventListener("click", function(){ 
              screen.value += this.value;                  
          });  
      }
    } 
    Fbuttons();   
//////////////////////////////////////////
    stup.addEventListener("click" , function(){ 
        screen.value = imgs[count].title;
    });
//////////////////////

    restart.addEventListener("click" , function (){ 
        for(r = 0 ; r < imgs.length ; r++){
            imgs[r].style.display = "block";
            count = 0;
            screen.value = "";
        } 
    });

/////////////////////////
enter.addEventListener("click" , function(){
    if(imgs[count].title == screen.value){
         imgs[count].style.display = "none";
         count++;
         if(count == imgs.length -1){
             count = count - 1 ;
             return "well done"; 
        }
        console.log(imgs[count].title);
    }
    console.log(imgs.length);
    
    screen.value = "";
 });
////////////////////////////
close.addEventListener("click" ,function(){
	screen.value = screen.value.slice(0,screen.value.length-1);
});
////////////////
clear.addEventListener("click" ,function(){
	screen.value = "";
    screen.value.length = "";
});