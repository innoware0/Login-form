/* SELECT EYE IMG */
let eyeimg = document.querySelector(".pass-visibility");

/* SELECT INPUT PASSWORD */
let passinput = document.querySelector(".input-password");

passinput.addEventListener("keyup", function(){
     let passinputlength = passinput.value.length
if(passinputlength == 0){
     eyeimg.style.display = "none";
}else{
     eyeimg.style.display = "inline-block"; 
};
});

eyeimg.addEventListener("click", function(){
     let passInputType = passinput.getAttribute("type");
if(passInputType == "password"){
     passinput.setAttribute("type", "text");
     eyeimg.setAttribute("src", "images/invisible-eye.png");
}else{
     passinput.setAttribute("type", "password");
     eyeimg.setAttribute("src", "images/visible-eye.png");
}
});