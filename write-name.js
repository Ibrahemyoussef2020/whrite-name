let choose = document.querySelectorAll(".choose");
let dives = document.querySelectorAll("div");
let stup  = document.querySelector(".stup");
let restart  = document.querySelector(".restart");
let d;
let c;
let inp = document.querySelector(".input");
let but = document.querySelectorAll("button");
let screen =  document.querySelector("#screen");
let b;
let animals = [];
let animal;
///////////////////////////////////////////
for(c = 0; c < choose.length; c++){
    choose[c].addEventListener("click" , function(){
        for(d = 0; d < dives.length; d = d + 1){
          dives[d].classList.remove("show");
            if(dives[d].title == this.value){
                    console.log("yes");
                    console.log(dives[d]);
                    dives[d].classList.add("show");
            }    
        }

    ///////////////////////////////////////////////
    for(b = 0 ; b < but.length  ; b++ ){ 
          but[b].addEventListener("click", function(){    
              animals.push(this.value);
              animal = animals.join("");
              screen.value = animal;
              if(screen.value == ""){
                  animals = [];
              }
              let imgs = document.querySelectorAll("div.show > img");
              let count = 0;
              console.log(count);
                restart.addEventListener("click" , function(){ 
                    for(r = 0 ; r < imgs.length ; r++){
                        imgs[r].style.display = "block";
                        count = 0;
                        animals = [];
                        screen.value = "";
                        console.log(count);
                    } 
                    animals = [];
                    });
                stup.addEventListener("click" , function(){ 
                    imgs[count].style.display = "none"; 
                    count++;
                    if(count == imgs.length -1){
                        count = count - 1 ;
                    return "well done";
                    }
                    animals = [];
                    screen.value = "";
                    console.log(imgs[count]);
                console.log(count);
                });
                inp.addEventListener("click", function(){
                        if(imgs[count].title === screen.value){
                            if(count == imgs.length -1){
                                count = count - 1 ;
                                return "well done";
                            }
                        imgs[count].style.display = "none";
                        count++;
                        console.log(imgs[count].title);     
                        }else{
                        
                        count = count;
                        console.log(animal);
                        console.log(imgs[count].title); 
                        }  
                        animals = [];
                        screen.value = "";
                })// end fun but inp
          });// end fun but    
      }
//////////////////////////////////////////

});
}